<script setup lang="ts">
import { useFileStore } from '@/stores/useFileStore';
import { computed } from 'vue';

const fileStore = useFileStore();

const tableData = computed(() => fileStore.data?.sheetData ?? []);
</script>

<template>
  <div class="file-info">
    <div>
      <h3>Информация о файле</h3>
      <p>
        <strong>Имя файла:{{ fileStore.file?.name }}</strong>
      </p>
      <p>
        <strong>Размер: {{ fileStore.file?.size }}</strong>
      </p>
      <p>
        <strong>Тип: {{ fileStore.file?.type }}</strong>
      </p>
    </div>

    <div v-if="tableData.length">
      <h3>Предварительный просмотр данных</h3>
      <table>
        <thead>
          <tr>
            <th v-for="(header, index) in tableData[0]" :key="index">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in tableData.slice(1)" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      <p>Пожалуйста, выберите файл для просмотра данных.</p>
    </div>
  </div>
</template>

<style scoped>
.file-info {
  margin-top: 20px;
}

h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

p {
  font-size: 18px;
  color: #555;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

table,
th,
td {
  border: 1px solid #ddd;
}

th,
td {
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

td {
  background-color: #ffffff;
}
</style>
