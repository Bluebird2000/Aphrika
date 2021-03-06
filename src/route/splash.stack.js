import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../scenes/splash/splash';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const SplashStack = () => {
    return (
        <Navigator headerMode='none'>
          <Screen name="Splash" component={ Splash }/>
        </Navigator>
    );
  }
export default SplashStack;  