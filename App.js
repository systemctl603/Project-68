import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Facebook from "./screens/fb";
import Instagram from "./screens/ig";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Facebook" component={Facebook} />
        <Tabs.Screen name="Instagram" component={Instagram} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
