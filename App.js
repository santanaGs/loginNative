import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Firebase
import firebase from './src/firebaseConnection';
import { Login } from './src/pages/Login/index';
import { Home } from './src/pages/Home/index'
import { Register } from './src/pages/Register';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthProvider from './src/contexts/auth';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
