<template>
    <div :style="bannerStyle" class="banner-container">
        <div class="brand-logo">
            <img :src="brandLogo" alt="Brand Logo" />
        </div>
        <div class="banner-section">
            <div class="content">
                <h1>{{ heading }}</h1>
                <p>{{ text }}</p>
                <button @click="buttonAction">{{ buttonText }}</button>
            </div>
            <div class="images">
                <img v-for="(image, index) in images" :key="index" :src="image" :alt="'Image ' + (index + 1)" />
            </div>
        </div>
        <div class="discount-tag">
            <img :src="discountTag" alt="Discount Tag" />
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    backgroundColor: {
        type: String,
        default: '#ffffff'
    },
    brandLogo: {
        type: String,
        required: true
    },
    bannerPadding: {
        type: String,
        default: "20px"
    },
    heading: {
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
    },
    buttonAction: {
        type: Function,
        required: true
    },
    images: {
        type: Array,
        default: () => []
    },
    discountTag: {
        type: String,
        required: true
    }
});

const bannerStyle = computed(() => ({
    backgroundColor: props.backgroundColor,
    padding: props.bannerPadding,
}));
</script>

<style scoped>
.banner-container {
    position: relative;
    border-radius: 8px;
}

.banner-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
}

.brand-logo img {
    height: 40px;
    width: 60px;
    position: absolute;
    top: 7px;
    left: 7px;
}

.content {
    flex: 1;
    margin-left: 100px;
}

.content h1 {
    font-size: 3rem;
}

.content p {
    font-size: 1rem;
    margin-bottom: 10px;
}

.content button {
    padding: 0.5rem 0.75rem;
    background-color: blue;
    border-radius: 10px;
    color: white;
    cursor: pointer;
}

.images {
    display: flex;
    gap: 10px;
}

.images img {
    height: 160px;
    width: auto;

    position: relative;
}

.discount-tag {
    position: absolute;
    top: -9px;
    left: 65%;
    transform: translateX(-50%);
    text-align: center;
    width: 5rem;
}

.discount-tag span {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    font-weight: bold;
    color: #fff;
}
</style>
