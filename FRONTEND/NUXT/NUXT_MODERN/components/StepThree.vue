<!-- StepThree.vue -->
<template>
    <div>
        <h2>Step 3: Payment Information</h2>
        <select v-model="localData.paymentMethod">
            <option value="" disabled>Select Payment Method</option>
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank_transfer">Bank Transfer</option>
        </select>

        <input v-if="localData.paymentMethod === 'credit_card'" v-model="localData.cardDetails" type="text"
            placeholder="Card Details" />

        <div class="buttons">
            <button @click="handlePrev">Previous</button>
            <button @click="handleSubmit">Submit</button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useFormStore } from '~/stores/form'

const props = defineProps({
    formData: Object
})

const emit = defineEmits(['prev', 'submit'])

const formStore = useFormStore()

const localData = ref({ ...props.formData })

watch(localData, (newData) => {
    formStore.setStep3Data(newData)
})

const handleSubmit = () => {
    emit('submit')
}

const handlePrev = () => {
    emit('prev')
}
</script>

<style scoped>
.buttons {
    margin-top: 20px;
}

button {
    margin: 0 10px;
}
</style>
