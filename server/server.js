import http from 'http';
import formidable from 'formidable';
import fs from 'fs/promises';
import xlsx from 'xlsx';
import path from 'path';

const port = process.env.PORT || 8001;
const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

fs.mkdir(UPLOAD_DIR, { recursive: true })
  .then(() => console.log(`Директория ${UPLOAD_DIR} готова!`))
  .catch((err) => console.error('Ошибка при создании папки uploads:', err));

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Origin');

  if (req.url === '/upload' && req.method === 'POST') {
    const form = formidable({
      uploadDir: UPLOAD_DIR,
      keepExtensions: true,
      multiples: false,
      filename: (name, ext, part) => `${Date.now()}-${part.originalFilename}`,
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('Ошибка при загрузке файла');
      }

      if (!files.excelfile || !files.excelfile[0]) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        return res.end('Файл не найден в запросе');
      }

      const file = files.excelfile[0];
      const filePath = file.filepath;
      const originalName = file.originalFilename;

      try {
        await fs.access(filePath);

        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

        await fs.unlink(filePath);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(
          JSON.stringify({
            fileName: originalName,
            sheetData: data,
          }),
        );
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end(`Ошибка при обработке Excel файла: ${error.message}`);
      }
    });
  } else if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Не найдено');
  }
});

server.listen(port, () => {
  console.log(`🚀 Сервер работает на http://localhost:${port}`);
});
