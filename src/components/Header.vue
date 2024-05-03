<template>
  <header>
    <img src="../assets/vuejs-icon.svg" alt="Vue Logo">
    <h1> Vue Todos </h1>
    <nav class="filter">
      <button>
        <router-link 
        :to="{ path: '/active'}"
      >
        Active Todos
      </router-link>
      </button>
      <button>
        <router-link 
        :to="{ path: '/archived'}"
      >
        Completed Todos
        </router-link>
      </button>
    </nav>
  </header> 
</template>
