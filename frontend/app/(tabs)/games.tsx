import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { Game } from '../types'

const Games = () => {
  const [games, setGames] = useState<Game[] | null>(null)
  const [loading, setLoading] = useState(true)

  const getGames = async () => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL
    const stringUrl = `${apiUrl}/games`
    const response = await fetch(stringUrl)
    const data = await response.json()
    setLoading(false)
    setGames(data)
  }

  useEffect(() => {
    getGames()
  }, [])

  const getResultText = (teamScore: number, opponentScore: number) => {
    if (teamScore > opponentScore) return 'WIN'
    if (teamScore < opponentScore) return 'LOSE'
    return ''
  }
  const getResultColor = (result: string) => {
    switch (result) {
      case 'WIN':
        return 'blue'
      case 'LOSE':
        return 'red'
      default:
        return 'black'
    }
  }

  return (
    <ScrollView style={styles.container}>
      {games &&
        games.map((game) => {
          const homeResult = getResultText(
            game.HomeTeamScore,
            game.AwayTeamScore
          )
          const awayResult = getResultText(
            game.AwayTeamScore,
            game.HomeTeamScore
          )

          return (
            <View key={game.GameID} style={styles.gameCard}>
              <View style={styles.teamContainer}>
                <Text style={styles.teamName}>{game.HomeTeam}</Text>
                <Text style={styles.teamScore}>{game.HomeTeamScore}</Text>
                {homeResult !== '' && (
                  <Text
                    style={[
                      styles.resultText,
                      { color: getResultColor(homeResult) },
                    ]}
                  >
                    {homeResult}
                  </Text>
                )}
              </View>
              <Text style={styles.vs}>VS</Text>
              <View style={styles.teamContainer}>
                <Text style={styles.teamName}>{game.AwayTeam}</Text>
                <Text style={styles.teamScore}>{game.AwayTeamScore}</Text>
                {awayResult !== '' && (
                  <Text
                    style={[
                      styles.resultText,
                      { color: getResultColor(awayResult) },
                    ]}
                  >
                    {awayResult}
                  </Text>
                )}
              </View>
            </View>
          )
        })}
      {loading && <ActivityIndicator color="#007BFF" size="large" />}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  gameCard: {
    backgroundColor: '#ffffff',
    marginVertical: 8,
    padding: 15,
    borderRadius: 8,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  teamContainer: {
    flex: 1,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  teamScore: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  resultText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
  },
  vs: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
    marginHorizontal: 10,
  },
})

export default Games
