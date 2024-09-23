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

<script>
export default {
    data() {
        return {
            activeSlider: null, // Tracks the currently open slider
            sliders: [
                { name: "Slider 1", content: "Content of Slider 1" },
                { name: "Slider 2", content: "Content of Slider 2" },
                { name: "Slider 3", content: "Content of Slider 3" },
            ],
        };
    },
    methods: {
        toggleSlider(index) {
            if (this.activeSlider === index) {
                this.activeSlider = null; // Close the slider if clicked again
            } else {
                this.activeSlider = index; // Open the clicked slider
            }
        },
    },
};
</script>

<style>
.slider-content {
    /* Add your slider styling here */
}
</style>
