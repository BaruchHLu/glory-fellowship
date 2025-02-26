// packages/backend/src/server.ts
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', (req, res) => {
  res.send('Hello from Glory Fellowship backend!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
