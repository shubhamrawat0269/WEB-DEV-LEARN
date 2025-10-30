<template>
    <div>
        <h3>User Info</h3>
        <Suspense>
            <template #default>
                <AsyncUser :name="userName" />
            </template>
            <template #fallback>
                <p>Loading user...</p>
            </template>
        </Suspense>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
const AsyncUser = defineAsyncComponent(() => import('./UserProfile.vue'))
const userName = ref('John Doe')
</script>
