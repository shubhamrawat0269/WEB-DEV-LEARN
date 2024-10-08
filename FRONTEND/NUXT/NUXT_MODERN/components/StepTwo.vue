<!-- StepTwo.vue -->
<template>
    <div>
        <h2>Step 2: Address Information</h2>
        <input v-model="localData.address" type="text" placeholder="Address" />
        <input v-model="localData.city" type="text" placeholder="City" />

        <div class="buttons">
            <button @click="handlePrev">Previous</button>
            <button @click="handleNext">Next</button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useFormStore } from '~/store/form.store';

const props = defineProps({
    formData: Object
})

const emit = defineEmits(['prev', 'next'])

const formStore = useFormStore()

const localData = ref({ ...props.formData })

watch(localData, (newData) => {
    formStore.setStep2Data(newData)
})

const handleNext = () => {
    emit('next')
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
