import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LivreScreen from "../screens/Livre";

const Stack = createStackNavigator();

function LivreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home-livre"
        component={LivreScreen}
        options={{ headerTitle: "Gestion des livres" }}
      />
    </Stack.Navigator>
  );
}

export default LivreStack;
