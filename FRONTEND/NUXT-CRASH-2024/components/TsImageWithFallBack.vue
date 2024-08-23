<template>
    <div class="image-container">
        <img v-if="hasImage" :src="src" :alt="alt" class="image" />
        <div v-else class="fallback-text">{{ fallbackText }}</div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

// Props are defined using defineProps() in <script setup>
const props = defineProps({
    src: {
        type: String,
        required: false,
    },
    alt: {
        type: String,
        required: false,
        default: 'Image',
    },
    fallbackText: {
        type: String,
        required: false,
        default: 'No image source available',
    },
});

// Computed property to check if an image source is provided
const hasImage = computed(() => !!props.src);
</script>

<style scoped>
.image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12rem;
    height: 5rem;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
}

.image {
    width: 12rem;
    height: 5rem;
    border-radius: 0.5rem;
    object-fit: fill;
    max-width: 100%;
    max-height: 100%;
}

.fallback-text {
    font-size: 20px;
    color: #777;
    text-align: center;
    padding: 20px;
}
</style>
