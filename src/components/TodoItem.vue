<template>
  <div class="todo">
    <h3>{{ props.todo?.title }}</h3>
    <div class="icons">
      <i class="material-icons">delete</i>
      <i class="material-icons">archive</i>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    todo: Object
  });
</script>