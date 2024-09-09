<template>
    <!-- <div class="fixed inset-0 bg-slate-700 bg-opacity-40 z-10 sm:hidden"> -->
    <div class="bg-orange-600 w-full h-[36rem] absolute top-20 rounded-tl-lg rounded-bl-lg">
        <OverlayLoader :isLoading="loading" />
        <div v-if="!loading">
            <!-- Your content goes here -->
            Content Here
        </div>
    </div>
    <!-- </div> -->
</template>
<script setup>
import { ref } from "vue";
const loading = ref(true);

onMounted(() => {
    setTimeout(() => {
        loading.value = false;
    }, 3000); // Simulate a 3-second loading time
});

</script>