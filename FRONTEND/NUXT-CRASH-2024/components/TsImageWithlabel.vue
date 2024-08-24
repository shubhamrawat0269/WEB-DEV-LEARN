<template>
    <div :style="cardStyle">
        <div style="background-color: white; height: 100%">
            <img :src="imageSrc" :alt="imageAlt" :style="imageStyle" />
        </div>
        <p>{{ text }}</p>
    </div>
</template>

<script setup>
import { computed, toRefs } from 'vue';

const props = defineProps({
    imageSrc: {
        type: String,
        required: true
    },
    imageAlt: {
        type: String,
        default: ''
    },
    cardWidth: {
        type: String,
        default: "120px"
    },
    cardHeight: {
        type: String,
        default: "120px"
    },
    cardPadding: {
        type: String,
        default: "2.25px"
    },
    text: {
        type: String,
        default: ''
    },
    bgGradient: {
        type: String,
        default: "linear-gradient(10deg, #F9E400, #FFF 105%)"
    },
    borderColor: {
        type: String,
        default: "#d9cb62"
        // default: "#FFF"
    },
    borderWidth: {
        type: String,
        default: "1px"
    },
    cardBorderRadius: {
        type: String,
        default: "4px"
    }
});

const { imageSrc, imageAlt, text, cardWidth, cardHeight, cardPadding, bgGradient, cardBorderRadius, borderColor, borderWidth } = toRefs(props);

const cardStyle = computed(() => ({
    width: cardWidth.value,
    height: cardHeight.value,
    padding: cardPadding.value,
    background: bgGradient.value,
    borderRadius: cardBorderRadius.value,
    borderColor: borderColor.value,
    borderTopWidth: borderWidth.value,
}));

const imageStyle = computed(() => ({
    width: "100%",
    height: "100%",
}))
</script>

<style scoped>
p {
    text-align: center;
    padding: 3px 0;
    font-size: 14px;
    color: #333;
}
</style>
