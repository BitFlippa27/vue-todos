<template>
  <header class="sticky top-0 z-10 text-center bg-gray-800 p-5 flex justify-between items-center">
    <div class="flex items-center">
      <img 
        class="max-w-xs transform rotate-[-10deg]" 
        src="../assets/vuejs-icon.svg" 
        alt="Vue Logo">
      <h1 class="text-2xl p-4 ml-4 text-white transform rotate-[2deg] border-b-4 border-transparent bg-gradient-to-r from-emerald-600 to-gray-500 rounded-lg">
        Vue Todos
      </h1>
    </div>
    <nav class="space-x-4">
      <button>
        <router-link 
        :to="{ path: '/active'}"
      >
        Active Todos
      </router-link>
      </button >
      <button>
        <router-link 
        :to="{ path: '/completed'}"
      >
        Completed Todos
        </router-link>
      </button>
    </nav>
    <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-400 to-gray-500"></div>
  </header> 
</template>

