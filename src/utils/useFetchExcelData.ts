import { useQuery } from '@tanstack/vue-query';

const fetchExcelData = async () => {
  const response = await fetch('http://localhost:8001/table');

  if (!response.ok) {
    throw new Error('Ошибка получения данных');
  }

  return response.json();
};

export function useFetchExcelData() {
  return useQuery({
    queryKey: ['exceldata'],
    queryFn: fetchExcelData,
  });
}
