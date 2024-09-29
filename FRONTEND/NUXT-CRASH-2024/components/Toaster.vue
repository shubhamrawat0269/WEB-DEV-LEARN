<template>
    <button @click="showNotify">Click ME</button>
    <button @click="showNofityMessage">Click ME</button>
</template>

<script setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

function showNotify() {
    toast.success('Mission successful', { autoClose: 1700, closeButton: false, pauseOnHover: false, hideProgressBar: true });
}

function showNofityMessage() {
    toast.error('Successfully failed', { autoClose: 1700, closeButton: false, pauseOnHover: false, hideProgressBar: true });
}

</script>

<style>
button {
    background-color: greenyellow;
    color: rgb(34, 115, 170);
    padding: 0.5rem;
    margin-left: 0.5rem;

}
</style>