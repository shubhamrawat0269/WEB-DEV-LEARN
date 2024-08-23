import { defineStore } from 'pinia';

// export const useCounterStore = defineStore("counter", {
//     state: () => ({
//         count: 0,
//         name: "Shubham Rawat",
//     }),
//     actions: {
//         incrementByOne(){
//             this.count++;
//         }
//     }
// })

export const useCounterStore = defineStore("counter", () => {
    /* State */
    const count = ref(0);
    const name = ref("Shubham Rawat");

    /* getter fn */
    const doubleCount = computed(() => count.value * 2);

    /* methods (actions) */

    function incrementByOne(){
        count.value++;
    }

    return {count,name,doubleCount,incrementByOne};
})