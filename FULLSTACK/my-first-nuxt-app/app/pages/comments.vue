<template>
    <div class="p-6">
        <h1>Server Sid rednering using useAsyncData composable.</h1>
        <ul class="space-y-2">
            <li v-for="comment in comments" :key="comment.id" class="p-3 bg-blue-100 rounded">
                <h2 class="font-semibold">{{ comment.name }}</h2>
                <p>{{ comment.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
const { data: comments } = await useAsyncData('comments', () => $fetch('https://jsonplaceholder.typicode.com/comments'));
</script>