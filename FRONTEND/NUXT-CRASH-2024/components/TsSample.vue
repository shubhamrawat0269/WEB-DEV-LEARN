<template>
    <div>
        <div v-for="(slider, index) in sliders" :key="index">
            <button @click="toggleSlider(index)">
                {{ slider.name }}
            </button>
            <div v-if="activeSlider === index" class="slider-content">
                <!-- Slider content goes here -->
                {{ slider.content }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeSlider = ref(null);
const sliders = ref([
    { name: "Slider 1", content: "Content of Slider 1" },
    { name: "Slider 2", content: "Content of Slider 2" },
    { name: "Slider 3", content: "Content of Slider 3" },
])

function toggleSlider(index) {
    if (activeSlider.value === index) {
        activeSlider.value = null; // Close the slider if clicked again
    } else {
        activeSlider.value = index; // Open the clicked slider
    }
}
</script>