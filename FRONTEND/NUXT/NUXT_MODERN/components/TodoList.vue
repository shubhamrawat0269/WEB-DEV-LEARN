<template>
    <div>
        <input type="text" v-model="newTodo" placeholder="Enter a new todo" />
        <button @click="handleAddTodo">Add</button>

        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <span @click="handleToggleTodo(todo.id)">{{ todo.text }}</span>
                <button @click="handleRemoveTodo(todo.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { useTodoStore } from '~/store/todo.store';

const newTodo = ref('');
const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();

const handleAddTodo = () => {
    if (newTodo.value.trim()) {
        addTodo(newTodo.value.trim());
        newTodo.value = ''
    }
}

const handleRemoveTodo = (id: number) => {
    removeTodo(id);
}

const handleToggleTodo = (id: number) => {
    toggleTodo(id);
}

</script>