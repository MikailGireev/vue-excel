import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useFileStore = defineStore('counter', () => {
  const file = ref<File | null>(null);

  const data = ref<string[][] | null>(null);

  const setFile = (newFile: File) => {
    file.value = newFile;
    console.log(file.value);
  };

  const setData = (newData: string[][] | null) => {
    data.value = newData;
    console.log(data.value);
  };

  const fileName = computed(() => (file.value ? file.value.name : ''));
  const fileSize = computed(() => (file.value ? (file.value.size / 1024).toFixed(2) : ''));

  return {
    file,
    fileName,
    fileSize,
    data,
    setFile,
    setData,
  };
});
