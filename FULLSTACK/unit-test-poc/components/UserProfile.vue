<template>
    <div class="profile">
        <p>User: {{ name }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{ name: string }>()
</script>