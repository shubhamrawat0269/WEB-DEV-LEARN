<template>
    <div>
        <h1 data-test="heading">Hello, {{ name }}!</h1>
        <button data-test="btn" @click="onClick">Click</button>

        <AsyncMessage />
    </div>
</template>


<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{ name?: string }>()
const emits = defineEmits<{
    (e: 'clicked'): void
}>()

const onClick = () => {
    emits('clicked')
}

const AsyncMessage = defineAsyncComponent(() =>
    import('../components/AsyncMessage.vue')
)
</script>