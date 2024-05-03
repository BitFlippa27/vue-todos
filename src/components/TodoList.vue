<template>
  <div class="todo-list">
    <p>{{ props.name ?? "Todos" }} ({{ props.totalTodos ?? 0 }})</p>
    <transition name="fade" mode="out-in">
      <div v-if="!loading">
        <div v-for="todo in todos" :key="todo.id">
          <TodoItem :todo="todo" />
        </div>
      </div>
    </transition>  
    <div class="loading" v-if="loading">
      Loading Tasks...
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";
import { storeToRefs } from "pinia";
import { useTodoStore } from '@/stores/todoStore';

const todoStore = useTodoStore();

const { loading } = storeToRefs(todoStore);

const props = defineProps({
  todos: Object,
  todo: Object,
  name: String,
  totalTodos: Number
});


</script>