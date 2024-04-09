import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

//SCREENS

import StoreScreen from "./screens/StoreScreen";
import AboutScreen from "./screens/AboutScreen";


const Drawer = createDrawerNavigator();

export function MyDrawer() {
    return (
        <Drawer.Navigator
        >

           
            <Drawer.Screen
                name="StoreScreen"
                component={StoreScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="AboutScreen"
                component={AboutScreen}
                options={{
                    headerShown: false,
                }}
            />

        </Drawer.Navigator>
    )
}
