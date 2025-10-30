<template>
    <div class="async-message">
        <p>{{ message }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{ message: string }>()
</script>