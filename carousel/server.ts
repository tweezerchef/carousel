import express, { Request, Response } from 'express';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

// Serve static assets (React app) in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));

    app.get('/', (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

// Example endpoint to fetch all books
app.get('/api/books', async (req: Request, res: Response) => {
    try {
        const books = await prisma.bookdata.findMany();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while fetching users' });
    }
});

const PORT: number = Number(process.env.PORT) || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
