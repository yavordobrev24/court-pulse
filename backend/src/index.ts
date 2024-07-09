import express, { Request, Response } from 'express'
import {
  StandingsData,
  TeamsData,
} from './types'
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

app.get('/teams', async (req: Request, res: Response) => {
  const season = new Date().getFullYear()
  const teamsUrl = `${NBA_STATS_API_URL}/scores/json/teams`
  const standingsUrl = `${NBA_STATS_API_URL}/scores/json/Standings/${season}`
  try {
    const [teamsResponse, standingsResponse] = await Promise.all([
      fetch(teamsUrl, {
        headers: {
          'Ocp-Apim-Subscription-Key': `${NBA_STATS_API_KEY}`,
        },
      }),
      fetch(standingsUrl, {
        headers: {
          'Ocp-Apim-Subscription-Key': `${NBA_STATS_API_KEY}`,
        },
      }),
    ])

    if (!teamsResponse.ok) {
      throw new Error(`Teams API request failed: ${teamsResponse.statusText}`)
    }
    if (!standingsResponse.ok) {
      throw new Error(
        `Standings API request failed: ${standingsResponse.statusText}`
      )
    }
    const teamsData = await teamsResponse.json()
    const standingsData = await standingsResponse.json()
    const joinedData = teamsData.map((team: TeamsData) => {
      const teamStandings = standingsData.find(
        (standing: StandingsData) => standing.TeamID === team.TeamID
      )
      return {
        ...team,
        ...teamStandings,
      }
    })

    console.log(joinedData)
    res.json(joinedData)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
})

app.listen(PORT, () => {
  console.log('Server is running on', PORT)
})
