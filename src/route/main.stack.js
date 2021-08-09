import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, Platform, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from "../constant";
import Dashboard from './dashboard.stack'
import Request from './request.stack';
const { COLORS, FONTS, SIZES } = theme;
const BottomTab = createBottomTabNavigator();

const MainStack = () => (
    <BottomTab.Navigator
        
        tabBarOptions={

            Platform.OS == "ios" ? 
            {
                keyboardHidesTabBar: true,
                activeTintColor: COLORS.red,
                inactiveTintColor: COLORS.navcolor,
                allowFontScaling: true,
                labelStyle: { 
                    backgroundColor: COLORS.white,
                    fontSize: SIZES.font, 
                },
                style: { 
                    height: 100,
                }
            }

        : 
        {
            keyboardHidesTabBar: true,
            activeTintColor: COLORS.red,
            inactiveTintColor: COLORS.navcolor,
            allowFontScaling: true,
            labelStyle: { 
                height: 20,
                backgroundColor: COLORS.white,
                fontSize: SIZES.font, 
            },
            style: { 
                height: 70,
            }
        },
        { showLabel: false }
    }

    >
        <BottomTab.Screen name="Home" component={Dashboard} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
                <Octicons name="home" color={color} size={28} />
              ),
          }} />

          <BottomTab.Screen name="Request" component={Request} options={{
            tabBarLabel: 'Request',
            tabBarIcon: ({ color, size }) => (
                <View style={{ 
                    backgroundColor: COLORS.black, width: 70, 
                    height: 70, borderRadius: 20,
                    justifyContent: 'center', alignItems: 'center'
                  }}>
                  <Octicons name="plus" color={COLORS.white} size={28} />
                </View>
              ),
          }} />

        <BottomTab.Screen name="Profile" component={Dashboard} options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
                <Feather name="user" color={color} size={28} />
              ),
          }} />

    </BottomTab.Navigator>        
)

export default MainStack;