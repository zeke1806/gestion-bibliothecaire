import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { TouchableOpacity, View, Text, ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import tailwind from "tailwind-rn";
import { Livre } from "../../api/types";
import { useDelLivre } from "../../services/delLivre";
import { uselivres } from "../../services/livres";
import themes from "../../theme";
import { formatDate } from "../../utils";
import SectionTitle from "../public/SectionTitle";

const ListItem: FC<{
  item: Livre;
}> = ({ item }) => {
  const navigation = useNavigation();
  const { submit } = useDelLivre(item);

  const navigateToUpdate = () => {
    navigation.navigate("update-livre", item);
  };

  return (
    <TouchableOpacity
      style={tailwind("flex-row p-1 justify-between")}
      onPress={navigateToUpdate}
    >
      <View style={tailwind("flex-row")}>
        <Ionicons
          name="book-outline"
          size={themes.space * 2}
          style={tailwind("mr-5")}
        />
        <View>
          <Text>Numero: {item.id}</Text>
          <Text>Design: {item.design}</Text>
          <Text>Auteur: {item.auteur}</Text>
          <Text>Date d'édition: {formatDate(item.dateEdition)}</Text>
          <Text>Disponible: {item.disponible ? "oui" : "non"}</Text>
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

const ListLivre: FC = () => {
  const { livres, loading } = uselivres();

  const renderItem = ({ item }: { item: Livre }) => {
    return <ListItem item={item} />;
  };

  if (loading) {
    return <ActivityIndicator size="large" color={themes.colors.secondary} />;
  }

  return (
    <>
      <SectionTitle iconName="list" text="List de livre" />
      <FlatList
        data={livres}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </>
  );
};

export default ListLivre;
