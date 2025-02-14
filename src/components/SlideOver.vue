<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div id="slideover" class="slideover open">
    <div class="slideover-content">
      <router-link to="/"><h1>Загрузка и анализ Excel файла</h1></router-link>
      <nav>
        <ul class="nav-list">
          <router-link
            class="router-link-nav"
            :class="route.path === '/upload' ? 'router-link-active' : ''"
            to="/upload"
            >Загрузить файл</router-link
          >
          <router-link
            class="router-link-nav"
            :class="route.path === '/table' ? 'router-link-active' : ''"
            to="/table"
            >Просмотр данных</router-link
          >
          <router-link
            class="router-link-nav"
            :class="route.path === '/about' ? 'router-link-active' : ''"
            to="/about"
            >О проекте</router-link
          >
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.slideover {
  position: relative;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #333;
  color: white;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  z-index: 1000;
}

.slideover.open {
  transform: translateX(0);
}

.slideover-content {
  padding: 20px;
}

.slideover h1 {
  color: white;
  text-align: center;
  margin-bottom: 30px;
}

nav ul {
  list-style: none;
  padding: 0;
  text-align: center;
}

nav ul li {
  margin: 20px 0;
}

.router-link-nav {
  color: white;
  font-size: 18px;
  border: 1px solid white;
  padding: 10px 0;
  width: 200px;
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out;
}

.router-link-nav:hover {
  background-color: rgba(0, 224, 222, 0.6);
}

.router-link-active {
  background-color: rgba(0, 224, 222, 0.6);
}

.nav-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  gap: 15px;
}
</style>
