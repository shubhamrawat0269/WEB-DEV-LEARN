<template>
    <h1>This is Blog {{ route.params.slug }}</h1>
</template>

<script setup lang="ts">
const route = useRoute()
</script>