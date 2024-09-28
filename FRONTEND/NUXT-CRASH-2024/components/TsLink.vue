<template>
    <a :href="redirect_link" target="_blank" @click="redirectToLink()">Click ME</a>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const data = ref(
    [
        {
            "title": "EU Net",
            "redirection_links": [
                "https://www.google.com",
                "https://www.facebook.com"
            ]
        }
    ],
);


// [
//     {
//         "title": "EU Net",
//         "redirection_links": [
//             "https://www.google.com",
//             "https://www.facebook.com"
//         ]
//     },
//     {
//         "title": "Post NL",
//         "redirection_links": [
//             "https://www.youtube.com",
//             "https://www.jiocinema.com",
//             "https://www.toolstation.com"
//         ]
//     }
// ]

const redirect_link = ref("");


function redirectToLink() {
    // api hit, we get response

    data.value.map((cur) => cur.title === "Post NL" ? redirect_link.value = cur.redirection_links[0] : '');
    // console.log(redirect_link.value);
    if (!redirect_link.value) data.value.map((cur) => cur.title === "EU Net" ? redirect_link.value = cur.redirection_links[0] : '')
    // console.log(redirect_link.value);
}



</script>