// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LogIn from './src/components/login';
import SignUp from './src/components/signup';
import Chat from './src/components/chat';
import LoadScreen from './src/components/loadScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen
          name="LoadingScreen"
          component={LoadScreen}
          options={{
            headerTitle: '',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Login"
          component={LogIn}
          options={{
            headerTitle: '',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewUser"
          component={SignUp}
          options={{
            headerTitle: '',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="GiftedChat"
          component={Chat}
          options={{
            headerTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
