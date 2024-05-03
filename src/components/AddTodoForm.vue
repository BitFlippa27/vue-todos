<template>
  <div class="add-todo-form"> 
    <form @submit.prevent="handleSubmit"> 
    <input 
      @keyup.enter="handleSubmit"
      type="text"
      placeholder="Type in todo"
      v-model="newTodo"
    >
    <button>Add</button>
   </form>
  </div>
  
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from '@/stores/todoStore';


const todoStore = useTodoStore();
const addTodo = todoStore.addTodo;
const newTodo = ref("");

console.log("TodoForm",newTodo);

const handleSubmit = () => {
  if (newTodo.value.length > 0) {
    addTodo({
      id: Math.floor(Math.random() * 1000),
      title: newTodo.value,
      completed: false,
    });
    newTodo.value = "";
  }
}

</script>
