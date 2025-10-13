<template>
    <div class="p-6">
        <ul class="space-y-2">
            <li v-for="user in users" :key="user.id" class="p-3 bg-blue-100 rounded">
                <h2 class="font-semibold">{{ user.name }}</h2>
                <p>{{ user.email }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
const { data: users } = await useFetch('https://jsonplaceholder.typicode.com/users');
</script>