<template>
  <header class="flex justify-between items-center sticky top-0 z-10 text-center bg-gray-800 p-5">
    <div class="flex items-center">
      <img 
        class="max-w-xs transform rotate-[-10deg]" 
        src="../../assets/vuejs-icon.svg" 
        alt="Vue Logo"
      >
      <h1 class="text-2xl p-4 ml-4 text-white transform rotate-[2deg] border-b-4 border-transparent bg-gradient-to-r from-emerald-600 to-gray-500 rounded-lg">
        Vue Todos
      </h1>
    </div>
    <nav class="space-x-4">
      <router-link 
        :to="{ path: '/active'}"
        class="inline-block px-4 py-2 border-b-2 border-transparent text-gray-300 after:border-gradient hover:border-opacity-0 active:bg-emerald-600 active:text-white active:font-extrabold rounded-lg font-semibold"
      >
        Active Todos
      </router-link>
      <router-link 
        :to="{ path: '/completed'}"
        class="inline-block px-4 py-2 border-b-2 border-transparent text-gray-300 after:border-gradient hover:border-opacity-0 active:bg-emerald-600 active:text-white active:font-extrabold rounded-lg font-semibold"
      >
        Completed Todos
      </router-link>
    </nav>
    <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-400 to-gray-500"></div>
  </header> 
</template>