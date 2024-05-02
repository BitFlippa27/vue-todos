<template>
  <div class="todo">
    <h3 :class="{ 'completed': props.todo?.completed }">{{ props.todo?.title }}</h3>
    <div class="icons">
      <i 
        class="material-icons trash"
        @click="removeTodo(props.todo?.id)"
      >delete</i>
      <i 
        :class="{ 'active': props.todo?.completed }"
        class="material-icons"
        @click="archiveTodo(props.todo?.id)"
      >archive</i>
    </div> 
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore';

const props = defineProps({
  todo: Object
});

const todoStore = useTodoStore();
const removeTodo = todoStore.removeTodo;
const archiveTodo = todoStore.archiveTodo;

</script>