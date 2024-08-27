<template>
    <div class="tag-toggle">
        <div class="tags">
            <button v-for="(tag, index) in tags" :key="index" @click="currentTag = tag"
                :class="{ active: currentTag === tag }">
                {{ tag }}
            </button>
        </div>
        <div class="content">
            <p v-if="currentTag === 'About DeWALT'">Content for Tag 1</p>
            <p v-if="currentTag === 'Products'">Content for Tag 2</p>
            <p v-if="currentTag === 'Deals'">Content for Tag 3</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const tags = ref(['About DeWALT', 'Products', 'Deals']);
const currentTag = ref(tags.value[0]);
</script>

<style scoped>
.tag-toggle {
    padding: 20px;
    border: 1px solid #ccc;
    width: 300px;
}

.tags {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

button {
    padding: 5px 10px;
    border: none;
    background-color: #eee;
    cursor: pointer;
}

button.active {
    background-color: #007bff;
    color: #fff;
}

.content p {
    margin: 0;
}
</style>
