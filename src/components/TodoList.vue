<template>
  <div class="todo-list">
    <p>{{ props.name ?? "Todos" }} ({{ props.totalTodos ?? 0 }})</p>
      <div v-for="todo in todos" :key="todo.id">
        <TodoItem :todo="todo" />
      </div>
    </div>
   
</template>

<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";


const props = defineProps({
  todos: Object,
  todo: Object,
  name: String,
  totalTodos: Number
});

console.log("TodoList", props.todo);

</script>