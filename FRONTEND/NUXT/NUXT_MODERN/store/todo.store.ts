import { defineStore } from "pinia";
import { ref } from "vue";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const useTodoStore = defineStore("todo", () => {
  // state
  const todos: Ref<Todo[]> = ref([]);

  // actions
  const addTodo = (todo: string) => {
    todos.value.push({ id: Date.now(), text: todo, completed: false });
  };

  const removeTodo = (id: number) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  const toggleTodo = (id: number) => {
    const todo = todos.value.find((todo) => todo.id === id);
    if (todo) todo.completed = !todo.completed;
  };

  /* Return state & actions */

  return { todos, addTodo, removeTodo, toggleTodo };
});
