import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT
const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.get('/', (req: Request, res: Response) => {
  res.send('Index works')
})

app.listen(PORT, () => {
  console.log('Server is running on', PORT)
})
