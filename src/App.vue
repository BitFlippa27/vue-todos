<template>
  <main class="app-container"> 
    <Header />
    <transition name="fade">
      <router-view />
    </transition>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useTodoStore } from "@/stores/todoStore";
import Header from "@/components/Header.vue";

const todoStore = useTodoStore();

onMounted(() => {
     todoStore.getTodos();
   });


</script>

