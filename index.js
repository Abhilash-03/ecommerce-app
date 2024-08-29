import express from 'express';
import { configDotenv } from 'dotenv';
import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';
import productRoute from './routes/product.route.js';
import connectDB from './db/connect.db.js';
configDotenv();

const app = express();
const PORT = process.env.PORT || 3000;

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