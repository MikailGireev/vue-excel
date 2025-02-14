import { useMutation } from '@tanstack/vue-query';
import { useFileStore } from '@/stores/useFileStore';

const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append('excelfile', file);

  const response = await fetch('http://localhost:8001/upload', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Ошибка при загрузке файла');
  }

  return response.json();
};

export function useUploadFile() {
  const fileStore = useFileStore();

  const mutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: (data) => {
      fileStore.setData(data);
    },
    onError: (error) => {
      console.error('Ошибка при загрузке файла:', error);
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    isSuccess: mutation.isSuccess,
    data: mutation.data,
  };
}
