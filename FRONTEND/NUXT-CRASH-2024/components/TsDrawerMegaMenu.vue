<template>
    <div class="fixed inset-0 bg-slate-700 bg-opacity-40 z-10 sm:hidden">
        <div class="bg-white w-[18rem] h-full absolute right-0 rounded-tl-lg rounded-bl-lg">

        </div>
    </div>
</template>
<script setup>

import { ref } from "vue";
const subMenuItemsList = ref([
    {
        id: 1,
        title: "Cords & Wire",
        items: [
            "Insulated Wire",
            "Duct Tape",
            "Havells Switch",
            "Premium Socket"
        ]
    },
    {
        id: 2,
        title: "Cords & Wire",
        items: [
            "Insulated Wire",
            "Duct Tape",
            "Havells Switch"
        ]
    },
    {
        id: 3,
        title: "Cords & Wire",
        items: [
            "Insulated Wire",
            "Duct Tape",
            "Havells Switch",
            "Premium Socket"
        ]
    },
    {
        id: 4,
        title: "Cords & Wire",
        items: [
            "Insulated Wire",
            "Duct Tape",
            "Havells Switch",
            "Premium Socket",
            "Kei Wires & Door Bell"
        ]
    },
    {
        id: 5,
        title: "Cords & Wire",
        items: [
            "Insulated Wire",
            "Duct Tape",
            "Havells Switch"
        ]
    },
    {
        id: 6,
        title: "Cords & Wire",
        items: [
            "Insulated Wire",
            "Duct Tape",
            "Havells Switch",
            "Premium Socket",
            "Junction Box",
            "Cable Clips(Saddle)"
        ]
    },
    {
        id: 7,
        title: "Cords & Wire",
        items: [
            "Insulated Wire",
            "Duct Tape",
            "Havells Switch",
            "Premium Socket"
        ]
    },
    {
        id: 8,
        title: "Cords & Wire",
        items: [
            "Insulated Wire",
            "Havells Switch"
        ]
    },
    {
        id: 9,
        title: "Cords & Wire",
        items: [
            "Insulated Wire",
            "Duct Tape",
            "Havells Switch",
        ]
    },
    {
        id: 10,
        title: "Cords & Wire",
        items: [
            "Insulated Wire",
            "Duct Tape",
            "Havells Switch",
            "Premium Socket",
            "Modular Plates"
        ]
    },
]);

</script>