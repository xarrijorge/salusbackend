// src/index.js
import { config } from 'dotenv';
import express, { json } from 'express';
import connectDB from './config/db.js';
const app = express();
const port = process.env.PORT || 8000;

config();
import userRoutes from './routes/User.js';


app.use(json());

connectDB();



app.get('/', (req, res) => {
    res.send('Everyone deserves to live in a world where they feel safe!');
});
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});