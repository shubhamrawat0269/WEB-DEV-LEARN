<template>
    <div>
        <h2>Step 1: Personal Information</h2>
        <input v-model="localData.name" type="text" placeholder="Name" />
        <input v-model="localData.email" type="email" placeholder="Email" />
        <button @click="handleNext">Next</button>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useFormStore } from '~/store/form.store';

const props = defineProps({
    formData: Object
})

const emit = defineEmits(['next'])

const formStore = useFormStore()

const localData = ref({ ...props.formData })

watch(localData, (newData) => {
    formStore.setStep1Data(newData)
})

const handleNext = () => {
    emit('next')
}
</script>
