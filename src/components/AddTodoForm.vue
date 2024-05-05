<template>
  <div> 
    <form @submit.prevent="handleSubmit" class="space-x-4"> 
    <input 
      class="form"
      @keyup.enter="handleSubmit"
      type="text"
      placeholder="Add todo"
      v-model="newTodo"
    >
    <button class="button">Add</button>
   </form>
  </div>
  
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from '@/stores/todoStore';


const todoStore = useTodoStore();
const addTodo = todoStore.addTodo;

const newTodo = ref("");
const newTodoPriority = ref(2);

const handleSubmit = () => {
  if (newTodo.value.length > 0) {
    addTodo({
      id: Math.floor(Math.random() * 1000),
      title: newTodo.value,
      completed: false,
      priority: newTodoPriority.value,
      date: new Date()
    });
    newTodo.value = "";
    newTodoPriority.value = 2;
  }
}

</script>
