import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import LecteurStack from "./LecteurStack";
import LivreStack from "./LivreStack";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="lecteur-stack"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="lecteur-stack"
        component={LecteurStack}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="glasses-outline" color={color} />
          ),
          tabBarLabel: "Lecteur",
        }}
      />
      <BottomTab.Screen
        name="livre-stack"
        component={LivreStack}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="book-outline" color={color} />
          ),
          tabBarLabel: "Livre",
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
