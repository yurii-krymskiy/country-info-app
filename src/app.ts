import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import countryRoutes from './routes/countryRoutes';
import calendarRoutes from './routes/calendarRoutes';

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: "API Works" })
});

app.use('/countries', countryRoutes);
app.use('/users', calendarRoutes);

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error('MONGO_URI is not defined');
}

mongoose.connect(mongoUri)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => console.error('DB error:', err));


app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running on port ${process.env.PORT || 3000}`)
);