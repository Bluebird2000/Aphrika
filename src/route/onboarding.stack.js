import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../scenes/onboarding/onboarding';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const OnbordingStack = () => {
    return (
        <Navigator headerMode='none'>
          <Screen name="Onboarding" component={ Onboarding }/>
        </Navigator>
    );
  }
  
export default OnbordingStack;