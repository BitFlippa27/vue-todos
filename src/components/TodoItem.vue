<template>
  <transition name="fade">
    <div class="todo" v-if="!isCompleted">
      <i 
        :class="{ 'active': props.todo?.completed }" 
        class="material-icons" @click="handleCompleteTodo(props.todo?.id)"
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
        v-model="newPriority" 
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
const newPriority = ref()

const todoStore = useTodoStore();


const handleSubmit = () => {
  todoStore.updateTodo({
    id: props.todo?.id,
    title: editableTitle.value,
    completed: false,
    priority: newPriority.value,
    date: props.todo?.date
  });
  editing.value = false
}

const handlePriorityChange = (target: HTMLSelectElement) => {
  const newPriority = Number(target.value);
  todoStore.updateTodo({
    id: props.todo?.id,
    title: editableTitle.value,
    completed: props.todo?.completed,
    priority: newPriority,
    date: props.todo?.date
  });
}

const handleCompleteTodo = (id: number) => {
  isCompleted.value = true; 
  setTimeout(() => todoStore.toggleCompleted(id), 500); 
}

const handleRemoveTodo = (id: number) => {
  isCompleted.value = true;
  setTimeout(() => todoStore.removeTodo(id), 500); 
}



const priorityClass = (priority: number) => {
  switch(priority) {
    case 1: 
      return "high-priority";
    case 2: 
      return "medium-priority";
    case 3: 
      return "low-priority";
    default: 
      return "";
     }
   }


</script>
