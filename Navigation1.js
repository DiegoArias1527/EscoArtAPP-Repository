import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

//SCREENS
import HomeScreen from "./screens/HomeScreen";
import ReportScreen from "./screens/ReportScreen";

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{
            tabBarAtiveTintColor: 'red',
        }}
      >

        
        <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                tabBarIcon: ({ color, size}) => (
                    <MaterialCommunityIcons name="home" size={24} color={color} />
                ),
            }}
        />
        <Tab.Screen 
            name="Report" 
            component={ReportScreen} 
            options={{
                tabBarIcon: ({ color, size}) => (
                    <MaterialCommunityIcons name="alert-circle-outline" size={24} color={color} />
                ),
            }}
        />
      </Tab.Navigator>
    );
  }

export default function Navigation1() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}