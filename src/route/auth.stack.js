import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../scenes/auth/login';
const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const SplashStack = () => {
    return (
        <Navigator headerMode='none'>
          <Screen name="Login" component={ Login }/>
        </Navigator>
    );
  }
export default SplashStack;  