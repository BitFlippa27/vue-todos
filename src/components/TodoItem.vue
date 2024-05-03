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
      <select 
        :class="['todo', priorityClass(props.todo?.priority)]"
        v-model="newTodoPriority" 
        @change="handlePriorityChange($event.target as HTMLSelectElement)"
      >
        <option value="1">High</option>
        <option value="2">Medium</option>
        <option value="3">Low</option>
      </select>
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
const newTodoPriority = ref()

const todoStore = useTodoStore();
const removeTodo = todoStore.removeTodo;
const completeTodo = todoStore.toggleCompleted;
const updateTodo = todoStore.updateTodo;

const handlePriorityChange = (target: HTMLSelectElement) => {
  const newPriority = Number(target.value);
  updateTodo({
    id: props.todo?.id,
    title: editableTitle.value,
    completed: props.todo?.completed,
    priority: newPriority
  });
}

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
    completed: false,
    priority: newTodoPriority.value
  });
  editing.value = false
}

const priorityClass = (priority: number) => {
  switch(priority) {
    case 1: 
      return 'high-priority';
    case 2: 
      return 'medium-priority';
    case 3: 
      return 'low-priority';
    default: 
      return '';
     }
   }


</script>
