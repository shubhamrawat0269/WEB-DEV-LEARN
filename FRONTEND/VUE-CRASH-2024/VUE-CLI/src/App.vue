<script>
 export default {
  data(){
    return {
      username: "Shubham Rawat",
      login: false,
      tasks: ["Learn Basics of Vue", "Task two", "Task three", "Task four",]
    }
  }
 }
</script>

<template>
  <h1>Hello {{username}}</h1>
  <p v-if="login">User is Active</p>
  <p v-else>User is Not Active</p>
</template>


