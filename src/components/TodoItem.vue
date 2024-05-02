<template>
  <div class="todo">
    <h3>{{ props.todo?.title }}</h3>
    <div class="icons">
      <i 
        class="material-icons"
        @click="removeTodo(props.todo?.id)"
      >delete</i>
      <i 
        class="material-icons"
        @click="archiveTodo(props.todo?.id)"
      >archive</i>
    </div> 
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore';

const todoStore = useTodoStore();
const removeTodo = todoStore.removeTodo;
const archiveTodo = todoStore.archiveTodo;
const props = defineProps({
  todo: Object
});
</script>