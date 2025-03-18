import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Linking,
  Image,
  useWindowDimensions,
} from 'react-native';
import { Text, Card, Button, Surface, ActivityIndicator, useTheme } from 'react-native-paper';
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

export default function HomeScreen() {
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
      <Surface style={styles.header} elevation={4}>
        <Image
          source={{ uri: 'https://github.com/Math-debug.png' }}
          style={styles.avatar}
        />
        <Text variant="headlineLarge" style={styles.title}>Matheus</Text>
        <Text variant="bodyLarge" style={styles.subtitle}>Desenvolvedor de Software</Text>
        
        <View style={styles.socialButtonsContainer}>
          <Button
            mode="contained"
            icon={({ size, color }) => (
              <FontAwesome name="github" size={size} color={color} />
            )}
            onPress={() => Linking.openURL('https://github.com/Math-debug')}
            style={styles.socialButton}
          >
            GitHub
          </Button>
          
          <Button
            mode="contained"
            icon={({ size, color }) => (
              <FontAwesome name="linkedin" size={size} color={color} />
            )}
            onPress={() => Linking.openURL('https://www.linkedin.com/in/matheus-araújo-xavier-42a047156/')}
            style={[styles.socialButton, styles.linkedinButton]}
          >
            LinkedIn
          </Button>
        </View>
      </Surface>

      <Text variant="headlineMedium" style={styles.sectionTitle}>Meus Projetos</Text>
      
      <View style={styles.projectsGrid}>
        {repositories.map((repo) => (
          <Card
            key={repo.id}
            style={[styles.card, { width: width > 768 ? '45%' : '100%' }]}
            onPress={() => Linking.openURL(repo.html_url)}
          >
            <Card.Content>
              <View style={styles.cardHeader}>
                <FontAwesome name="code-fork" size={16} color="#666" style={styles.cardIcon} />
                <Text variant="titleLarge">{repo.name}</Text>
              </View>
              {repo.description && (
                <Text variant="bodyMedium" style={styles.description}>
                  {repo.description}
                </Text>
              )}
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
    padding: 32,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 24,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    marginBottom: 16,
    color: '#666',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 8,
  },
  socialButton: {
    marginHorizontal: 8,
  },
  linkedinButton: {
    backgroundColor: '#0077B5',
  },
  githubButton: {
    marginTop: 8,
  },
  sectionTitle: {
    padding: 16,
    fontWeight: 'bold',
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
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardIcon: {
    marginRight: 8,
  },
  description: {
    marginTop: 8,
    color: '#666',
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  language: {
    color: '#0366d6',
  },
  languageIcon: {
    marginRight: 6,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  starsIcon: {
    marginRight: 6,
  },
  stars: {
    color: '#666',
  },
});
