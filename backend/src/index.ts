import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const PORT = process.env.PORT
const app = express()
const prisma = new PrismaClient()
const NBA_STATS_API_KEY = process.env.NBA_STATS_API_KEY
const NBA_STATS_API_URL = process.env.NBA_STATS_API_URL
const NBA_NEWS_API_KEY = process.env.NBA_NEWS_API_KEY
const NBA_NEWS_API_URL = process.env.NBA_NEWS_API_URL

app.use(cors())
app.use(express.json())
app.get('/', (req: Request, res: Response) => {
  res.send('Index works')
})

app.listen(PORT, () => {
  console.log('Server is running on', PORT)
})
