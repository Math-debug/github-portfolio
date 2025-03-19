import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Linking,
  Image,
  useWindowDimensions,
} from 'react-native';
import { Text, Button, Surface, useTheme, Chip, Divider } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  'Início': undefined;
  'Repositórios': undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp>();

  const skills = [
    { name: 'Vue.js', icon: ({ size, color }) => <FontAwesome name="code" size={size} color={color} />, color: '#41B883' },
    { name: 'React', icon: ({ size, color }) => <FontAwesome name="code" size={size} color={color} />, color: '#61DAFB' },
    { name: 'React Native', icon: ({ size, color }) => <FontAwesome name="mobile" size={size} color={color} />, color: '#61DAFB' },
    { name: 'SpringBoot', icon: ({ size, color }) => <FontAwesome name="leaf" size={size} color={color} />, color: '#6DB33F' },
    { name: 'Quarkus', icon: ({ size, color }) => <FontAwesome name="bolt" size={size} color={color} />, color: '#4695EB' },
    { name: 'Java', icon: ({ size, color }) => <FontAwesome name="coffee" size={size} color={color} />, color: '#007396' },
    { name: 'TypeScript', icon: ({ size, color }) => <FontAwesome name="code" size={size} color={color} />, color: '#3178C6' },
    { name: 'JavaScript', icon: ({ size, color }) => <FontAwesome name="code" size={size} color={color} />, color: '#F7DF1E' },
    { name: 'Docker', icon: ({ size, color }) => <FontAwesome name="cubes" size={size} color={color} />, color: '#2496ED' },
    { name: 'AWS', icon: ({ size, color }) => <FontAwesome name="cloud" size={size} color={color} />, color: '#FF9900' },
    { name: 'Git', icon: ({ size, color }) => <FontAwesome name="code-fork" size={size} color={color} />, color: '#F05032' }
  ];

  const experiences = [
    {
      title: 'Desenvolvedor Full Stack Pleno',
      company: 'Softplan',
      period: '10/2023 - Presente',
      description: 'Desenvolvimento de soluções na área jurídica, trabalhando com tecnologias como Vue.js, SpringBoot, Quarkus e Nest.js.'
    },
    {
      title: 'Desenvolvedor Full Stack Júnior',
      company: 'Compsis',
      period: '02/2022 - 10/2023',
      description: 'Desenvolvimento de microsserviços com SpringBoot. Implementação de APIs RESTful e integração com sistemas legados.'
    },
    {
      title: 'Líder de Suporte Técnico',
      company: 'Tudo de Bicho',
      period: '09/2020 - 02/2022',
      description: 'Liderança de equipe de suporte técnico, responsabilidades incluem solução de problemas, monitoramento de sistemas e coordenação de equipes.'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Surface style={styles.header} elevation={4}>
        <Image
          source={{ uri: 'https://github.com/Math-debug.png' }}
          style={styles.avatar}
        />
        <Text variant="headlineLarge" style={styles.title}>Matheus</Text>
        <Text variant="bodyLarge" style={styles.subtitle}>Desenvolvedor Full Stack</Text>
        
        <Text style={styles.bio}>
          Desenvolvedor apaixonado por criar soluções elegantes e eficientes. 
          Especializado em desenvolvimento web e mobile com experiência em Vue.js, React, 
          SpringBoot, Quarkus e tecnologias cloud.
        </Text>
        
        <View style={styles.socialButtonsContainer}>
          <Button
            mode="contained"
            icon={({ size, color }) => (
              <FontAwesome name="github" size={size} color={color} />
            )}
            onPress={() => Linking.openURL('https://github.com/Math-debug')}
            style={[styles.socialButton, styles.githubButton]}
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
          
          <Button
            mode="contained"
            icon={({ size, color }) => (
              <FontAwesome name="code-fork" size={size} color={color} />
            )}
            onPress={() => navigation.navigate('Repositórios')}
            style={[styles.socialButton, { backgroundColor: '#6200EA' }]}
          >
            Repositórios
          </Button>
        </View>
      </Surface>

      <View style={styles.section}>
        <Text variant="headlineMedium" style={styles.sectionTitle}>Tecnologias</Text>
        <View style={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <Chip 
              key={index} 
              icon={skill.icon}
              style={[styles.skillChip, { backgroundColor: skill.color + '20' }]}
              textStyle={{ color: skill.color }}
            >
              {skill.name}
            </Chip>
          ))}
        </View>
      </View>
      
      <Divider style={styles.divider} />
      
      <View style={styles.section}>
        <Text variant="headlineMedium" style={styles.sectionTitle}>Experiência Profissional</Text>
        {experiences.map((exp, index) => (
          <Surface key={index} style={styles.experienceCard} elevation={1}>
            <Text variant="titleLarge" style={styles.experienceTitle}>{exp.title}</Text>
            <Text variant="titleMedium" style={styles.experienceCompany}>{exp.company}</Text>
            <Text variant="labelLarge" style={styles.experiencePeriod}>{exp.period}</Text>
            <Text style={styles.experienceDescription}>{exp.description}</Text>
          </Surface>
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
    color: '#333',
    fontWeight: '600',
  },
  bio: {
    textAlign: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    lineHeight: 22,
    color: '#555',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginTop: 16,
  },
  socialButton: {
    marginHorizontal: 8,
    marginBottom: 8,
  },
  linkedinButton: {
    backgroundColor: '#0077B5',
  },
  githubButton: {
    backgroundColor: '#000000',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    padding: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    justifyContent: 'flex-start',
  },
  skillChip: {
    margin: 4,
  },
  divider: {
    height: 1,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  experienceCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
  },
  experienceTitle: {
    fontWeight: 'bold',
    color: '#000',
  },
  experienceCompany: {
    color: '#333',
    marginTop: 4,
  },
  experiencePeriod: {
    color: '#666',
    marginTop: 4,
    marginBottom: 8,
  },
  experienceDescription: {
    color: '#444',
    lineHeight: 20,
  },
});
