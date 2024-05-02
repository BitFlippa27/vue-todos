<template>
  <form @submit.prevent="handleSubmit"> 
    <input 
      @keyup.enter="handleSubmit"
      type="text"
      placeholder="Your todo"
      v-model="newTodo"
    >
    <button>Add</button>
   </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from '@/stores/todoStore';


const todoStore = useTodoStore();
const newTodo = ref("");

console.log("TodoForm",newTodo);

const handleSubmit = () => {
  if (newTodo.value.length > 0) {
    todoStore.addTodo({
      id: Math.floor(Math.random() * 1000),
      title: newTodo.value,
      completed: false,
    });
    newTodo.value = "";
  }
}

</script>
