import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { Team } from '../types'
import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router'

const Teams = () => {
  const [teams, setTeams] = useState<Team[] | null>(null)
  const glob = useGlobalSearchParams()
  const local = useLocalSearchParams()

  console.log('Local:', local, 'Global:', glob)
  const [loading, setLoading] = useState(true)

  const getTeams = async () => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL
    const stringUrl = `${apiUrl}/teams`
    const response = await fetch(stringUrl)
    const data = await response.json()
    setLoading(false)
    setTeams(data)
  }

  useEffect(() => {
    getTeams()
  }, [])

  return (
    <ScrollView style={styles.container}>
      {teams &&
        teams.map((team: Team) => (
          <View key={team.TeamID as React.Key} style={styles.teamCard}>
            <View style={styles.teamLogoContainer}>
              {team.WikipediaLogoUrl && (
                <Image
                  style={styles.image}
                  source={String(team.WikipediaLogoUrl)}
                  contentFit="contain"
                  transition={1000}
                />
              )}
            </View>
            <View style={styles.teamInfo}>
              <Text style={styles.teamName}>
                {team.City} {team.Name}
              </Text>
              <View style={styles.recordContainer}>
                <Text style={styles.record}>Wins: {team.Wins}</Text>
                <Text style={styles.record}>Losses: {team.Losses}</Text>
              </View>
              <View style={styles.additionalInfo}>
                <Text style={styles.stats}>
                  Head Coach:{' '}
                  <Text style={styles.boldText}>{team.HeadCoach}</Text>
                </Text>
                <Text style={styles.stats}>
                  Streak:{' '}
                  <Text style={styles.boldText}>{team.StreakDescription}</Text>
                </Text>
                <Text style={styles.stats}>
                  Division: <Text style={styles.boldText}>{team.Division}</Text>
                </Text>
                <Text style={styles.stats}>
                  Conference:{' '}
                  <Text style={styles.boldText}>{team.Conference}</Text>
                </Text>
              </View>
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
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  teamCard: {
    elevation: 4,
    backgroundColor: '#ffffff',
    marginVertical: 8,
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  teamLogoContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  teamInfo: {
    flex: 1,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  recordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  record: {
    fontSize: 16,
    color: '#555',
    width: '50%',
    textAlign: 'center',
  },
  additionalInfo: {
    marginTop: 12,
  },
  stats: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333',
  },
})

export default Teams
