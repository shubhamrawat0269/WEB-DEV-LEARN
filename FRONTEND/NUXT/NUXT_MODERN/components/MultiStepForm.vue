<template>
    <div class="form-stepper">
        <div v-if="title === 'Personal Information'">
            <StepOne :formData="formStore.step1Data" @next="nextStep" />
        </div>
        <div v-if="title === FormData.BILLING_ADDRESS">
            <StepTwo :formData="formStore.step2Data" @prev="prevStep" @next="nextStep" />
        </div>
        <div v-if="title === FormData.PAYMENT">
            <StepThree :formData="formStore.step3Data" @prev="prevStep" @submit="submitForm" />
        </div>

        <div class="stepper-buttons">
            <button v-if="index > 1" @click="prevStep">Previous</button>
            <button v-if="index < 3" @click="nextStep">Next</button>
            <button v-if="index === 3" @click="submitForm">Submit</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useFormStore } from '~/store/form.store';
import { FormData, useFormStepper } from '~/composables/useFormStepper'

const formStore = useFormStore()
const { index, current, nextStep, prevStep, submitForm, validateStep } = useFormStepper();

const title = computed(() => current.value.title);

import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();

const handleExternalProcessStatus = (status) => {
    switch (status) {
        case 'ok':
            console.log('Process completed with OK status')
            break
        case 'pending':
            console.log('Process is pending')
            break
        case 'failed':
            console.log('Process failed')
            break
        case 'cancel':
            console.log('Process was canceled')
            break
    }
}

watch(
    () => route.fullPath,
    (newPath) => {
        const isExternalProcess = newPath.includes('/process')
        const status = route.query.status

        if (isExternalProcess && ['ok', 'pending', 'failed', 'cancel'].includes(status)) handleExternalProcessStatus(status)
    }
)

</script>

<style scoped>
.form-stepper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stepper-buttons {
    margin-top: 20px;
}

button {
    margin: 0 10px;
}
</style>
