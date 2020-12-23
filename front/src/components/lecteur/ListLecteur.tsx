import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { TouchableOpacity, View, Text, ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import tailwind from "tailwind-rn";
import themes from "../../theme";
import SectionTitle from "../public/SectionTitle";
import { useLecteurs } from "../../services/lecteurs";
import { Lecteur } from "../../api/types";
import { useDelLecteur } from "../../services/delLecteur";

const ListItem: FC<{
  item: Lecteur;
}> = ({ item }) => {
  const navigation = useNavigation();
  const { submit } = useDelLecteur(item);

  const navigateToUpdate = () => {
    navigation.navigate("update-lecteur", item);
  };

  return (
    <TouchableOpacity
      style={tailwind("flex-row p-1 justify-between")}
      onPress={navigateToUpdate}
    >
      <View style={tailwind("flex-row")}>
        <Ionicons
          name="person-outline"
          size={themes.space * 2}
          style={tailwind("mr-5")}
        />
        <View>
          <Text>Numero: {item.id}</Text>
          <Text>Nom: {item.nom}</Text>
        </View>
      </View>
      <Ionicons
        name="trash-outline"
        size={themes.space * 2}
        style={tailwind("mr-5")}
        color="red"
        onPress={submit}
      />
    </TouchableOpacity>
  );
};

const ListLecteur: FC = () => {
  const { lecteurs, loading } = useLecteurs();

  const renderItem = ({ item }: { item: Lecteur }) => {
    return <ListItem item={item} />;
  };

  if (loading) {
    return <ActivityIndicator size="large" color={themes.colors.secondary} />;
  }

  return (
    <>
      <SectionTitle iconName="list" text="List de lecteur" />
      <FlatList
        data={lecteurs}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </>
  );
};

export default ListLecteur;
