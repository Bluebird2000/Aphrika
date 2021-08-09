import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserRequest from '../scenes/request/request';
import Clients from '../scenes/request/client';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const Request = () => {
    return (
        <Navigator headerMode='none'>
          <Screen name="Request" component={ UserRequest }/>
          <Screen name="Clients" component={ Clients }/>
        </Navigator>
    );
}
export default Request;