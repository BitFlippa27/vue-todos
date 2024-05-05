<template>
  <transition name="fade">
    <div 
      v-if="!isCompleted" 
      class="flex items-center justify-between mt-8 bg-gray-800 text-gray-200 border-gray-700 p-4 border-2 rounded-md shadow-lg hover:bg-gray-700 transition-colors duration-200 font-bold"
    >
    <div class="flex space-x-4">
      <i 
        :class="['material-icons', 'cursor-pointer', 'active:text-gray-700', props.todo?.completed ? 'text-blue-500' : '']"  
        @click="handleCompleteTodo(props.todo?.id)"
        :key="props.todo?.completed"
        :title="$props.todo?.completed ? 'Back to Active' : 'Complete'"
      >
        {{ props.todo?.completed ? 'check_box' : 'check_box_outline_blank' }}
      </i>
      <input 
        v-if="editing" 
        v-model="editableTitle" 
        @blur="handleSubmit" 
        @keyup.enter="handleSubmit" 
        class="form"
      />
      <h3 v-else :class="{ 'completed': props.todo?.completed }">
        {{ props.todo?.title }}</h3>
    </div>
      
        <div class="flex flex-col items-end space-y-2">
          <span class="text-xs text-gray-400">
            {{ props.todo?.date?.toLocaleDateString() }}
          </span>
        <div class="flex space-x-4">
          <select 
            :class="['w-6 h-6 rounded-full','appearance-none', 'text-transparent', 'outline-none','cursor-pointer', priorityClass(props.todo?.priority)]"
            v-model="newPriority" 
            @change="handlePriorityChange($event.target as HTMLSelectElement)"
            title="Priority"
          >
        <option class="text-gray-600" value="1">High</option>
        <option class="text-gray-600" value="2">Medium</option>
        <option class="text-gray-600" value="3">Low</option>
      </select>
      <i 
        class="material-icons cursor-pointer text-gray-500 hover:text-white active:text-gray-700 " 
        @click="editing = !editing"
        title="Edit"
      >
        edit
      </i>
      <i 
        class="material-icons trash cursor-pointer text-gray-500 hover:text-red-500 active:text-gray-700 " 
        @click="handleRemoveTodo(props.todo?.id)"
        title="Remove"
      >
        delete
      </i>
    </div>
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
    completed: props.todo?.completed ? true : false,
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
      return "bg-red-500";
    case 2: 
      return "bg-yellow-500";
    case 3: 
      return "bg-green-500";
    default: 
      return "";
     }
   }


</script>
