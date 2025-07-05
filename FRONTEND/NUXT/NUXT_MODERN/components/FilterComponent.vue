<template>
    <div>
        <!-- Accordion for Filters -->
        <Accordion>
            <AccordionTab v-for="(filter, key) in filters" :key="key" :header="filter.label">
                <div v-for="option in filter.options" :key="option" class="filter-option">
                    <Checkbox v-model="selectedFilters[filter.key]" :value="option" :label="option"
                        @change="onFilterChange(filter.key)" />
                </div>
            </AccordionTab>
        </Accordion>

        <!-- Chips for Selected Filters -->
        <div class="selected-filters">
            <Chip v-for="(values, key) in selectedFilters" :key="key" :label="formatChipLabel(key, values)" removable
                @remove="onChipRemove(key)" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Accordion, AccordionTab, Checkbox, Chip } from 'primevue';

const filters = [
    { key: 'category', label: 'Category', options: ['Electronics', 'Clothing', 'Home'] },
    { key: 'size', label: 'Size', options: ['Small', 'Medium', 'Large'] },
    { key: 'color', label: 'Color', options: ['Red', 'Blue', 'Green'] },
    { key: 'brand', label: 'Brand', options: ['H&M', 'Bata', 'Zara'] },
];

const selectedFilters = reactive < Record < string, string[]>> ({
    category: [],
    size: [],
    color: [],
    brand: [],
});

// Handle changes in selected filters
function onFilterChange(filterKey: string) {
    selectedFilters[filterKey] = [...selectedFilters[filterKey]]; // Trigger reactivity
}

// Format the chip label as "Category - Value1, Value2"
function formatChipLabel(filterKey: string, values: string[]): string {
    if (!values.length) return '';
    const filterLabel = filters.find((filter) => filter.key === filterKey)?.label || filterKey;
    return `${filterLabel} - ${values.join(', ')}`;
}

// Handle chip removal
function onChipRemove(filterKey: string) {
    selectedFilters[filterKey] = [];
}
</script>

<style scoped>
.filter-option {
    display: flex;
    align-items: center;
    margin: 5px 0;
}

.selected-filters {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
</style>
