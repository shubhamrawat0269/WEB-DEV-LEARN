<template>
    <div>
        <h2>Greeting Component</h2>
        <Suspense>
            <template #default>
                <AsyncMessage :message="msg" />
            </template>
            <template #fallback>
                <p>Loading message...</p>
            </template>
        </Suspense>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const AsyncMessage = defineAsyncComponent(() => import('./AsyncMessage.vue'))
const msg = ref('Hello from Async Component!')
</script>
