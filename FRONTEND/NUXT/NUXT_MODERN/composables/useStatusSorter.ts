// ~/composables/useStatusSorter.js
import { ref } from 'vue';

export function useStatusSorter(initialItems = []) {
  const sortedItems = ref([]);

  // Define the sorting function
  const sortByStatus = (items) => {
    sortedItems.value = items.sort((a, b) => {
      const statusOrder = {
        New: 1,
        'In Process': 2,
        Completed: 3,
      };
      return statusOrder[a.status] - statusOrder[b.status];
    });
  };

  // Sort initial items if provided
  if (initialItems.length) {
    sortByStatus(initialItems);
  }

  return {
    sortedItems,
    sortByStatus,
  };
}
