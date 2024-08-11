<script setup>
definePageMeta({
    layout: "custom"
})

const { handleOnAboutClick } = useUtils();
handleOnAboutClick()

</script>

<template>
    <div>
        <h1>About Page</h1>
    </div>
</template>