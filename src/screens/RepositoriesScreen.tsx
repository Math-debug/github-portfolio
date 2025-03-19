import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Linking,
  useWindowDimensions,
} from 'react-native';
import { Text, Card, ActivityIndicator, useTheme, Divider, Surface } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
  stargazers_count: number;
}

export default function RepositoriesScreen() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();
  const theme = useTheme();

  useEffect(() => {
    fetchRepositories();
  }, []);

  const fetchRepositories = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/Math-debug/repos');
      setRepositories(response.data);
    } catch (error) {
      console.error('Erro ao buscar repositórios:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Surface style={styles.header} elevation={2}>
        <Text variant="headlineMedium" style={styles.headerTitle}>Meus Repositórios</Text>
        <Text style={styles.headerSubtitle}>Projetos e contribuições no GitHub</Text>
      </Surface>
      
      <Divider style={styles.divider} />
      
      <View style={styles.projectsGrid}>
        {repositories.map((repo) => (
          <Card
            key={repo.id}
            style={[styles.card, { width: width > 768 ? '45%' : '100%' }]}
            onPress={() => Linking.openURL(repo.html_url)}
            mode="elevated"
          >
            <Card.Content>
              <View style={styles.cardHeader}>
                <FontAwesome name="code-fork" size={18} color="#6200EA" style={styles.cardIcon} />
                <Text variant="titleLarge" style={styles.repoName}>{repo.name}</Text>
              </View>
              {repo.description && (
                <Text variant="bodyMedium" style={styles.description}>
                  {repo.description}
                </Text>
              )}
              <View style={styles.cardFooter}>
                {repo.language && (
                  <View style={styles.languageContainer}>
                    <FontAwesome name="code" size={14} color="#0366d6" style={styles.languageIcon} />
                    <Text variant="bodyMedium" style={styles.language}>
                      {repo.language}
                    </Text>
                  </View>
                )}
                <View style={styles.starsContainer}>
                  <FontAwesome name="star" size={14} color="#f1c40f" style={styles.starsIcon} />
                  <Text variant="bodySmall" style={styles.stars}>
                    {repo.stargazers_count}
                  </Text>
                </View>
              </View>
            </Card.Content>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  headerSubtitle: {
    color: '#555',
    fontSize: 16,
  },
  divider: {
    height: 1,
    marginVertical: 16,
  },
  projectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 8,
  },
  card: {
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  repoName: {
    fontWeight: '700',
    color: '#000',
  },
  cardIcon: {
    marginRight: 8,
  },
  description: {
    marginTop: 8,
    color: '#333',
    marginBottom: 16,
    lineHeight: 20,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageIcon: {
    marginRight: 6,
  },
  language: {
    color: '#0366d6',
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starsIcon: {
    marginRight: 6,
  },
  stars: {
    color: '#666',
  },
});
