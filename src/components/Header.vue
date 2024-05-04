<template>
  <header class="sticky top-0 z-10 text-center bg-gray-800 p-5 flex justify-between items-center">
    <div class="flex items-center">
      <img 
        class="max-w-xs transform rotate-[-10deg]" 
        src="../assets/vuejs-icon.svg" 
        alt="Vue Logo">
      <h1 class="text-2xl pt-6 ml-4 text-gray-400 transform rotate-[2deg]">
        Vue Todos
      </h1>
    </div>
    <nav class="space-x-4">
      <button class="button">
        <router-link 
        :to="{ path: '/active'}"
      >
        Active Todos
      </router-link>
      </button >
      <button class="button">
        <router-link 
        :to="{ path: '/completed'}"
      >
        Completed Todos
        </router-link>
      </button>
    </nav>
    <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-500 to-yellow-500"></div>
  </header> 
</template>

