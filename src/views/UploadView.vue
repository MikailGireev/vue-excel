<script setup lang="ts">
import { useFileStore } from '@/stores/useFileStore';
import { useUploadFile } from '@/utils/useUploadFile';
import { ref } from 'vue';

const fileStore = useFileStore();
const { setFile, file } = fileStore;

const { mutate, isError, isLoading, isSuccess } = useUploadFile();

const fileInputRef = ref<HTMLInputElement | null>(null);

const onFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    setFile(input.files[0]);
    mutate(input.files[0]);
  }
};
</script>

<template>
  <section id="uploadSection" class="card">
    <div>
      <input
        ref="fileInputRef"
        type="file"
        id="fileInput"
        accept=".xlsx, .xls"
        @change="onFileChange"
      />
      <label for="fileInput" class="file-label">Загрузите ваш Excel файл</label>

      <p v-if="isLoading">Загрузка...</p>
      <p v-if="isError">Произошла ошибка</p>
      <p v-if="isSuccess">Файл успешно загружен {{ file?.name }}</p>
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

p {
  margin-top: 50px;
  text-align: center;
  font-family:
    'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
    sans-serif;
}
</style>
