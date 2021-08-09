import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserDashboard from '../scenes/dashboard/dashboard';
import PendingRequest from '../scenes/dashboard/pending';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

const Dashboard = () => {
    return (
        <Navigator headerMode='none'>
          <Screen name="Dashboard" component={ UserDashboard }/>
          <Screen name="PendingRequest" component={ PendingRequest }/>
        </Navigator>
    );
}
export default Dashboard;  