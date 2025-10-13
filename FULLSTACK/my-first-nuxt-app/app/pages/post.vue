<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold mb-4">tihs content rednering on client</h1>
        <div v-if="loading">Loading posts</div>
        <ul v-else class="space-y-2">
            <li v-for="post in posts.slice(0, 5)" :key="post.id" class="p-3 bg-gray-100 rounded">
                <h2 class="font-semibold">{{ post.title }}</h2>
                <p>{{ post.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
const posts = ref([]);
const loading = ref(true);

onMounted(async () => {
    const res = await $fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = res;
    loading.value = false
})

</script>