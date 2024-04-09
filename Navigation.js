import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import 'react-native-gesture-handler';

//SCREENS
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import StoreScreen from "./screens/StoreScreen";
import AboutScreen from "./screens/AboutScreen";

const StackNavigator = createStackNavigator();

const MyStack = () => {
    return (
        <StackNavigator.Navigator
            initialRouteName="LoginScreen"
        >

            <StackNavigator.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />
            <StackNavigator.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    headerShown: false,
                }}
            />
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <StackNavigator.Screen
                name="Store"
                component={StoreScreen}
                options={{
                    headerShown: false,
                }}
            />
            <StackNavigator.Screen
                name="About"
                component={AboutScreen}
                options={{
                    headerShown: false,
                }}
            />
        </StackNavigator.Navigator>
    )
}


export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}