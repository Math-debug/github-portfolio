// Importar polyfills primeiro
import './src/polyfills';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, MD3LightTheme } from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import RepositoriesScreen from './src/screens/RepositoriesScreen';

const Pilha = createNativeStackNavigator();

// Tema personalizado com cores mais contrastantes
const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#0366d6',
    secondary: '#0077B5',
    tertiary: '#000000',
    // Aumentar o contraste dos textos
    onSurface: '#000000',
    onSurfaceVariant: '#333333',
    onSurfaceDisabled: '#555555',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Pilha.Navigator initialRouteName="Início">
          <Pilha.Screen 
            name="Início" 
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Pilha.Screen 
            name="Repositórios" 
            component={RepositoriesScreen}
            options={{
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Pilha.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
