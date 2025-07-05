<template>
    <div class="pagination" v-if="totalPages > 1">
        <button :disabled="currentPage === 1" @click="changePage(1)" aria-label="First page">
            << </button>

                <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)" aria-label="Previous page">
                    < </button>

                        <span v-for="page in pagesToShow" :key="page"
                            :class="['page-number', { active: page === currentPage }]" @click="changePage(page)">
                            {{ page }}
                        </span>

                        <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)"
                            aria-label="Next page">
                            >
                        </button>

                        <button :disabled="currentPage === totalPages" @click="changePage(totalPages)"
                            aria-label="Last page">
                            >>
                        </button>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    totalItems: {
        type: Number,
        required: true,
    },
    itemsPerPage: {
        type: Number,
        default: 10,
    },
    modelValue: {
        type: Number,
        default: 1,
    },
});

const emit = defineEmits(['update:modelValue']);

const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));
const currentPage = ref(props.modelValue);

const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
        emit('update:modelValue', page);
    }
};

const pagesToShow = computed(() => {
    const pages = [];
    const maxVisible = 5;
    const start = Math.max(1, currentPage.value - 2);
    const end = Math.min(totalPages.value, currentPage.value + 2);

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    if (start > 2) pages.unshift('...');
    if (start > 1) pages.unshift(1);

    if (end < totalPages.value - 1) pages.push('...');
    if (end < totalPages.value) pages.push(totalPages.value);

    return pages;
});
</script>

<style scoped>
.pagination {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

button {
    padding: 0.5rem 1rem;
    background: none;
    border: 1px solid #ccc;
    cursor: pointer;
}

button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

.page-number {
    padding: 0.5rem;
    cursor: pointer;
}

.page-number.active {
    font-weight: bold;
    text-decoration: underline;
}
</style>
