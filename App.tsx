import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import ManageAccount from './src/screens/auth/ManageAccount';
import Login from './src/screens/auth/Login';
import SignUp from './src/screens/auth/SignUp';
import ResetPassword from './src/screens/auth/ResetPassword';
import Dashboard from './src/screens/views/Dashboard';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}} />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}} />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}} />
        <Stack.Screen
          name="ManageAccount"
          component={ManageAccount}
          options={{headerShown: false}} />
        <Stack.Screen
          name="Dashboarddd"
          component={Dashboard}
          />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}