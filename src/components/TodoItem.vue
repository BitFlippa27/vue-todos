<template>
  <transition name="fade">
    <div class="todo" v-if="!isCompleted">
      <i 
        :class="{ 'active': props.todo?.completed }" 
        class="material-icons" @click="handleArchiveTodo(props.todo?.id)"
        :key="props.todo?.completed"
        title="Archive"
      >
        {{ props.todo?.completed ? 'check_box' : 'check_box_outline_blank' }}
      </i>
      <input 
        v-if="editing" 
        v-model="editableTitle" 
        @blur="handleSubmit" 
        @keyup.enter="handleSubmit" 
      />
      <h3 v-else :class="{ 'completed': props.todo?.completed }">
        {{ props.todo?.title }}</h3>
      <div class="icons">
      <i 
        class="material-icons " 
        @click="editing = !editing"
        title="Edit"
      >
        edit
      </i>
      <i 
        class="material-icons trash " 
        @click="handleRemoveTodo(props.todo?.id)"
        title="'Remove'"
      >
        delete
      </i>
      </div>
    </div>
  </transition>

</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore';
import { ref } from "vue";


const props = defineProps({
  todo: Object
});

let editableTitle = ref(props.todo?.title)
let editing = ref(false)
const isCompleted = ref(false);

const todoStore = useTodoStore();
const removeTodo = todoStore.removeTodo;
const completeTodo = todoStore.toggleCompleted;
const updateTodo = todoStore.updateTodo;


const handleArchiveTodo = (id: number) => {
  isCompleted.value = true; 
  setTimeout(() => completeTodo(id), 500); 
}

const handleRemoveTodo = (id: number) => {
  isCompleted.value = true;
  setTimeout(() => removeTodo(id), 500); 
}

const handleSubmit = () => {
  updateTodo({
    id: props.todo?.id,
    title: editableTitle.value,
    completed: false
  });
  editing.value = false
}


</script>
