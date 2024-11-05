<template>
    <div>
        <button @click="sortItems">Sort by Status</button>
        <ul>
            <li v-for="item in sortedItems" :key="item.id">
                {{ item.name }} - {{ item.status }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStatusSorter } from '~/composables/useStatusSorter';

const items = ref([
    { id: 1, name: 'Task A', status: 'Completed' },
    { id: 2, name: 'Task B', status: 'New' },
    { id: 3, name: 'Task C', status: 'In Process' },
    { id: 4, name: 'Task D', status: 'New' },
]);

const { sortedItems, sortByStatus } = useStatusSorter(items.value);

// Call sortByStatus on your items to sort them
const sortItems = () => {
    sortByStatus(items.value);
};
</script>
