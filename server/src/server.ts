import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import routes from './routes';

dotenv.config();

const app = express();

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server is running");
});
