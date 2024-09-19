<template>
    <div>
        <form class="mt-10" @submit.prevent="submit">
            <span class="text-lg font-bold" v-text="stepper.current.value.title" />
            <div class="flex flex-col justify-center gap-2 mt-2">
                <div>
                    <div v-if="stepper.isCurrent('terms')">
                        <div>
                            <input id="carbon-offsetting" v-model="form.carbonOffsetting" type="checkbox" class="mr-2">
                            <label for="carbon-offsetting">I accept to deposit a carbon offsetting fee</label>
                        </div>
                        <div>
                            <input id="contract" :disabled="!form.contractAccepted" v-model="form.contractAccepted"
                                type="checkbox" class="mr-2">
                            <label for="contract">I accept the terms of the contract </label>
                            <span class="text-blue-600 cursor-pointer" @click="showButton">Read
                                More</span>
                            <a v-if="form.is_button_visible" @click="handleTermsAndCondition">Accept &
                                Continue</a>
                        </div>
                    </div>

                    <div v-if="stepper.isCurrent('user-information')">
                        <span>Company KvK:</span>
                        <input v-model="form.kvk" class="!mt-0.5" type="text">
                        <span>Company name:</span>
                        <input v-model="form.companyName" class="!mt-0.5" type="text">
                    </div>

                    <div v-if="stepper.isCurrent('billing-address')">
                        <input v-model="form.billingAddress" type="text">

                        <div v-if="form.userList.length > 0" class="flex gap-2">
                            <div v-for="user in form.userList">
                                <label>
                                    <input type="radio" name="user-list" v-model="user.name" />
                                    {{ user.name }}
                                </label>
                            </div>
                        </div>
                    </div>

                    <div v-if="stepper.isCurrent('payment')">
                        <div>
                            <input id="credit-card" v-model="form.payment" type="radio" class="mr-2"
                                value="credit-card">
                            <label for="credit-card">Credit card</label>
                        </div>
                        <div>
                            <input id="paypal" v-model="form.payment" type="radio" class="mr-2" value="paypal">
                            <label for="paypal">PayPal</label>
                        </div>
                    </div>
                    <p class="text-red-800" v-if="form.error.length > 0">{{ form.error }}</p>
                </div>

                <div>
                    <button v-if="!stepper.isLast.value">
                        {{ form.loading ? 'Loading' : 'Next' }}
                    </button>
                    <button v-if="stepper.isLast.value" @click="goBackTo('billing-address')">
                        Go To Billing
                    </button>
                    <button v-if="stepper.isLast.value" @click="goBackTo('payment')">
                        Go To Payment
                    </button>
                    <button v-if="stepper.isLast.value" @click="goBackTo('terms')">
                        Go To Terms
                    </button>
                    <button v-if="stepper.isLast.value" @click="goBackTo('user-information')">
                        Go To Information
                    </button>
                </div>
            </div>
        </form>

        <div class="flex flex-col gap-4 mt-12">
            <div class="w-full px-4 py-2 rounded border border-main space-y-2 overflow-auto h-full">
                <span class="font-bold">Form</span>
                <pre v-text="form" />
            </div>

            <div class="w-full px-4 py-2 rounded border border-main space-y-2 overflow-auto h-full">
                <span class="font-bold">Wizard</span>
                <pre v-text="stepper" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStepper } from '@vueuse/core'
import { reactive } from 'vue'


const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    return await data.json();
}

const form = reactive({
    is_button_visible: false,
    kvk: '',
    companyName: '',
    billingAddress: '',
    contractAccepted: false,
    carbonOffsetting: false,
    payment: 'credit-card' as 'paypal' | 'credit-card',
    error: "",
    loading: false,
    user: "",
    userList: [],
});

const showButton = () => form.is_button_visible = true;
const handleTermsAndCondition = () => form.contractAccepted = true;

const stepper = useStepper({
    'terms': {
        title: 'Terms',
        isValid: () => form.contractAccepted === true && form.carbonOffsetting === true,
    },
    'user-information': {
        title: 'User information',
        isValid: () => form.kvk && form.companyName,
    },
    'billing-address': {
        title: 'Billing address',
        isValid: () => form.billingAddress?.trim() !== '',
    },
    'payment': {
        title: 'Payment',
        isValid: () => ['credit-card', 'paypal'].includes(form.payment),
    },
})

async function submit() {
    if (stepper.current.value.isValid()) {
        const currentTitle = stepper.current.value.title;

        if (currentTitle === 'User information') {
            form.loading = true;
            const data = await getData();
            console.log(data);
            form.userList = data;
            form.loading = false;
        }
        form.error = ``;
        stepper.goToNext();
    } else {
        form.error = `field cannot be empty`;
    }
}


const goBackTo = (step: string) => stepper.goTo(step);

</script>

<style>
button {
    background-color: #04AA6D;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-left: 0.4rem;
}
</style>