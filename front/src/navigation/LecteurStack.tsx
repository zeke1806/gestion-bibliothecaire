import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UpdateLecteurScreen from "../screens/UpdateLecteur";
import LecteurScreen from "../screens/Lecteur";

const Stack = createStackNavigator();

function LecteurStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home-lecteur"
        component={LecteurScreen}
        options={{ headerTitle: "Gestion des lecteurs" }}
      />
      <Stack.Screen
        name="update-lecteur"
        component={UpdateLecteurScreen}
        options={{ headerTitle: "Modifier le lecteur" }}
      />
    </Stack.Navigator>
  );
}

export default LecteurStack;
