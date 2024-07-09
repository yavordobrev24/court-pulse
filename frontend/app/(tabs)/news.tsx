import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { NewsArticle } from '../types'
import { useRouter } from 'expo-router'
import { Image } from 'expo-image'

const cleanContent = (content: string) => {
  return content.replace(/(\s*… \[.*\])/g, '…')
}

const News = () => {
  const [news, setNews] = useState<NewsArticle[] | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const getNews = async () => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL
    const stringUrl = `${apiUrl}/news`
    const response = await fetch(stringUrl)
    const data = await response.json()
    setLoading(false)
    setNews(data)
  }

  useEffect(() => {
    getNews()
  }, [])

  return (
    <ScrollView style={styles.container}>
      {news &&
        news.map((article: NewsArticle, index) => (
          <Pressable key={index} onPress={() => router.navigate(article.url)}>
            <View style={styles.articleCard}>
              {article.urlToImage && (
                <Image
                  style={styles.image}
                  source={String(article.urlToImage)}
                  contentFit="fill"
                  transition={1000}
                />
              )}
              <View style={styles.textContainer}>
                <Text
                  style={styles.title}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {article.title}
                </Text>
                <Text style={styles.content}>
                  {cleanContent(article.content)}
                </Text>
                <Text style={styles.author}>{article.author}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      {loading && <ActivityIndicator color="#007BFF" size="large" />}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  articleCard: {
    elevation: 3,
    backgroundColor: '#ffffff',
    marginVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
  },
  content: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 10,
  },
  author: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#999999',
    textAlign: 'right',
  },
})

export default News
