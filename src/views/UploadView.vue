<script setup lang="ts"></script>

<template>
  <section id="uploadSection" class="card">
    <div>
      <input type="file" id="fileInput" accept=".xlsx, .xls" placeholder="Загрузить файл" />
      <label for="fileInput" class="file-label">Загрузите ваш Excel файл</label>
    </div>
  </section>
</template>

<style scoped>
#uploadSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
}

.file-label {
  width: 500px;
  font-size: 20px;
  font-family:
    'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
    sans-serif;
  cursor: pointer;
  border: 1px solid #2b2626;
  border-radius: 10px;
  padding: 30px;
  color: black;
  background-color: rgba(0, 224, 222, 1);
  transition: box-shadow 0.3s ease-in-out;
}

.file-label:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

input[type='file'] {
  display: none;
}
</style>
