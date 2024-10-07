<template>
    <div class="form-stepper">
        <div v-if="currentStep === 1">
            <StepOne :formData="formStore.step1Data" @next="nextStep" />
        </div>
        <div v-if="currentStep === 2">
            <StepTwo :formData="formStore.step2Data" @prev="prevStep" @next="nextStep" />
        </div>
        <div v-if="currentStep === 3">
            <StepThree :formData="formStore.step3Data" @prev="prevStep" @submit="submitForm" />
        </div>

        <div class="stepper-buttons">
            <button v-if="currentStep > 1" @click="prevStep">Previous</button>
            <button v-if="currentStep < 3" @click="nextStep">Next</button>
            <button v-if="currentStep === 3" @click="submitForm">Submit</button>
        </div>
    </div>
</template>

<script setup>
import { useFormStore } from '~/stores/form'
import { useFormStepper } from '~/composables/useFormStepper'
import StepOne from '~/components/StepOne.vue'
import StepTwo from '~/components/StepTwo.vue'
import StepThree from '~/components/StepThree.vue'

const formStore = useFormStore()
const { currentStep, nextStep, prevStep, submitForm } = useFormStepper()
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
