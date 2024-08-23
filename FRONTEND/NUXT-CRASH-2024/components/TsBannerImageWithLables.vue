<template>
    <div class="banner-container" :style="{ backgroundImage: `url(${imageUrl})` }">
        <div class="banner-content">
            <h1 class="banner-title">{{ title }}</h1>
            <p class="banner-text">{{ text }}</p>
            <button @click="handleClick" class="banner-button">{{ buttonText }}</button>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    buttonText: {
        type: String,
        required: true
    }
});

const emit = defineEmits(['buttonClick']);

function handleClick() {
    emit('buttonClick');
}
</script>

<style scoped>
.banner-container {
    position: relative;
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.banner-content {
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 8px;
}

.banner-title {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.banner-text {
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.banner-button {
    background-color: #ff5733;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.banner-button:hover {
    background-color: #c13e21;
}
</style>
