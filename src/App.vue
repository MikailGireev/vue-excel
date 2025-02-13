<script setup lang="ts">
import SlideOver from './components/Slideover.vue';
import HomeView from './views/HomeView.vue';
</script>

<template>
  <div class="container">
    <SlideOver />
    <main class="main">
      <router-view>
        <HomeView />
      </router-view>
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
