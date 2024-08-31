import express from 'express';
import { configDotenv } from 'dotenv';
import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';
import productRoute from './routes/product.route.js';
import connectDB from './db/connect.db.js';
import cors from 'cors';
configDotenv();

const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
    origin: ['https://clothingstore-beta.vercel.app', 'http://localhost:5173'],
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
}

app.use(cors(corsOptions));
app.use(express.json());
// routes
app.use('/api/v1/clothes/', productRoute);

app.get('/', (req, res) => {
    res.send('Hello, backend!');
})

// middlewares
app.use(notFound);
app.use(errorHandler);

const startServer = async() => {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
        console.log(`Server is runnning at port:${PORT}`);
    })
}

// running server
startServer();