// Importar polyfills primeiro
import './src/polyfills';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';

const Pilha = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Pilha.Navigator>
          <Pilha.Screen 
            name="Início" 
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        </Pilha.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
