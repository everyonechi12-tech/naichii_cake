import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productsRouter from './routes/products.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Bakery Naichii API siap digunakan.' });
});

app.use('/api/products', productsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
