import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppFirstLaunch from './splash.stack';
import Onboarding from './onboarding.stack';
import Auth from './auth.stack';
import Main from './main.stack';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const AppNavigator = (props) => {
    return (
      <NavigationContainer>
        <Navigator {...props} headerMode='none' initialRouteName="AppFirstLaunch">
          <Screen name="AppFirstLaunch" component={AppFirstLaunch}/>
          <Screen name="Onboarding" component={Onboarding}/>
          <Screen name="Auth" component={Auth}/>
          <Screen name="Main" component={Main}/>

        </Navigator>
      </NavigationContainer>
    );
  }
export default AppNavigator;  