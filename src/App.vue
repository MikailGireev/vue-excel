<script setup lang="ts">
import SlideOver from './components/SlideOver.vue';
</script>

<template>
  <div class="container">
    <SlideOver />
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.main {
  width: 100%;
  padding: 20px;
}
</style>
