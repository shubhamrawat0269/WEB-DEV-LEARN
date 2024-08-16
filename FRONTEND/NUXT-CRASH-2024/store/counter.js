import { defineStore } from 'pinia';

export const useCounterStore = defineStore("counter", {
    state: () => ({
        count: 0,
        name: "Shubham Rawat",
    }),
    actions: {
        incrementByOne(){
            this.count++;
        }
    }
})