<template>
  <div class="todo">
    <input 
      v-if="editing" 
      v-model="editableTitle" 
      @blur="handleSbmit" 
      @keyup.enter="handleSbmit"
    />
    <h3 
      v-else 
      :class="{ 'completed': props.todo?.completed }"
    >
      {{ props.todo?.title }}</h3>
    <div class="icons">
      <i 
        class="material-icons "
        @click="editing = !editing"
      >edit</i>
      <i 
        class="material-icons trash "
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
import { ref } from "vue";

const props = defineProps({
  todo: Object
});

let editableTitle = ref(props.todo?.title)
let editing = ref(false)


const todoStore = useTodoStore();
const removeTodo = todoStore.removeTodo;
const archiveTodo = todoStore.archiveTodo;
const updatedTodo = todoStore.updateTodo;

const handleSbmit = () => {
  updatedTodo({
    id: props.todo?.id,
    title: editableTitle.value,
    completed: false
  });
  editing.value = false
}
console.log(props.todo);


</script>