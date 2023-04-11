/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './src/store';

import Header from './src/components/Header';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Home from './src/pages/Home';
import Game2 from './src/pages/Game';
import GameHistory from './src/pages/GameHistory';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerTitle: props => <Header />}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerTitle: props => <Header />}}
          name="Game"
          component={Game2}
        />
        <Stack.Screen
          options={{headerTitle: props => <Header />}}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{headerTitle: props => <Header />}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerTitle: props => <Header />}}
          name="GameHistory"
          component={GameHistory}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function WrapperAppComponent() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default WrapperAppComponent;
