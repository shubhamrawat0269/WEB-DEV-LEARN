<template>
    <div v-if="isLoading" class="overlay-loader">
        <div class="loader"></div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    isLoading: {
        type: Boolean,
        required: true
    }
});
</script>

<style scoped>
.overlay-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    top: inherit;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loader {
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
