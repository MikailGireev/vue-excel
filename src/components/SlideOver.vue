<script setup lang="ts"></script>

<template>
  <div id="slideover" class="slideover open">
    <div class="slideover-content">
      <h1>Загрузка и анализ Excel файла</h1>
      <nav>
        <ul class="nav-list">
          <router-link to="/upload">Загрузить файл</router-link>
          <router-link to="/table">Просмотр данных</router-link>
          <router-link to="/about">О проекте</router-link>
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
  margin-bottom: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
  text-align: center;
}

nav ul li {
  margin: 20px 0;
}

nav ul li a {
  color: white;
  font-size: 18px;
}

.nav-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
}
</style>
