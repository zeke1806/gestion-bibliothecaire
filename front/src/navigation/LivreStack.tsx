import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LivreScreen from "../screens/Livre";
import UpdateLivreScreen from "../screens/UpdateLivre";

const Stack = createStackNavigator();

function LivreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home-livre"
        component={LivreScreen}
        options={{ headerTitle: "Gestion des livres" }}
      />
      <Stack.Screen
        name="update-livre"
        component={UpdateLivreScreen}
        options={{ headerTitle: "Modifier le livre" }}
      />
    </Stack.Navigator>
  );
}

export default LivreStack;
