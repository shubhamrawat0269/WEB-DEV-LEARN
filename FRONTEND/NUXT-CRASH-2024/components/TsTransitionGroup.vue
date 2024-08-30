<template>
    <div>
        <button @click="addItem">Add Item</button>

        <TransitionGroup name="list" tag="ul">
            <li v-for="item in list1" :key="'list1-' + item.id">
                {{ item.text }}
            </li>
        </TransitionGroup>
    </div>
</template>

<script setup>
import { ref } from "vue"

let list1 = ref([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' }
]);


function addItem() {
    const newItem = { id: Date.now(), text: `New Item ${Date.now()}` };
    list1.value.push(newItem);
}

</script>

<style>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
