import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native'
import { Player } from '../types'

const Players = () => {
  const [loading, setLoading] = useState(true)
  const [players, setPlayers] = useState<Player[] | null>(null)

  const getPlayers = async () => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL
    const stringUrl = `${apiUrl}/players`
    const response = await fetch(stringUrl)
    const data = await response.json()
    setLoading(false)
    setPlayers(data)
  }

  useEffect(() => {
    getPlayers()
  }, [])

  return (
    <ScrollView style={styles.container}>
      {players &&
        players.map((player: Player) => (
          <View style={styles.playerCard} key={player.PlayerID}>
            <View style={styles.playerDetails}>
              <Text style={styles.playerName}>
                {player.FirstName} {player.LastName}
              </Text>
              <Text style={styles.playerPosition}>{player.Position}</Text>
              <Text style={styles.playerTeam}>{player.Team}</Text>
            </View>
          </View>
        ))}
      {loading && <ActivityIndicator color="#007BFF" size="large" />}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  playerCard: {
    backgroundColor: '#ffffff',
    elevation: 3,
    borderRadius: 10,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  playerDetails: {
    flex: 1,
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  playerPosition: {
    fontSize: 16,
    color: '#666',
    marginBottom: 3,
  },
  playerTeam: {
    fontSize: 14,
    color: '#999',
  },
})

export default Players
