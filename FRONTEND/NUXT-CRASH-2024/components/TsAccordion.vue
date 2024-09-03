<template>
    <div class="">
        <div v-for="(item, index) in items" :key="index" :class="twMerge('border-1 border-slate-500 mb-1 rounded-sm')">
            <div :class="twMerge('bg-[#f5f5f5] cursor-pointer p-2.5 flex justify-between items-center')"
                @click="toggle(index)">
                <h3>{{ item.title }}</h3>
            </div>
            <div v-if="isOpen(index)" :class="twMerge('p-2.5')">
                <slot :name="'content-' + index">{{ item.content }}</slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { twMerge } from 'tailwind-merge';

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    allowMultipleOpen: {
        type: Boolean,
        default: false,
    },
})

const openIndexes = ref(props.allowMultipleOpen ? [] : null)

const toggle = (index) => {
    if (props.allowMultipleOpen) {
        if (openIndexes.value.includes(index)) {
            openIndexes.value = openIndexes.value.filter((i) => i !== index)
        } else {
            openIndexes.value.push(index)
        }
    } else {
        openIndexes.value = openIndexes.value === index ? null : index
    }
}

// Check if a tab is open
const isOpen = (index) => {
    return props.allowMultipleOpen
        ? openIndexes.value.includes(index)
        : openIndexes.value === index
}
</script>
