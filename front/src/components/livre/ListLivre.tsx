import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import tailwind from "tailwind-rn";
import themes from "../../theme";
import { ILivre } from "../../types";
import { formatDate } from "../../utils";
import SectionTitle from "../public/SectionTitle";

const ListItem: FC<{
  item: ILivre;
}> = ({ item }) => {
  const navigation = useNavigation();
  //const {submit} = useDeleteLecteur(item.idLecteur);

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
          <Text>Numero: {item.idLivre}</Text>
          <Text>Design: {item.design}</Text>
          <Text>Date d'édition: {formatDate(item.dateEdition)}</Text>
          <Text>Disponible: {item.disponible ? "oui" : "non"}</Text>
        </View>
      </View>
      <Ionicons
        name="trash-outline"
        size={themes.space * 2}
        style={tailwind("mr-5")}
        color="red"
        //onPress={submit}
      />
    </TouchableOpacity>
  );
};

const ListLivre: FC = () => {
  const renderItem = ({ item }: { item: ILivre }) => {
    return <ListItem item={item} />;
  };

  return (
    <>
      <SectionTitle iconName="list" text="List de livre" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.idLivre)}
      />
    </>
  );
};

export default ListLivre;

const data = [
  {
    idLivre: 1,
    design: "des",
    auteur: "aut",
    disponible: false,
    dateEdition: "2005-09-12T21:53:45.266Z",
  },
  {
    idLivre: 2,
    design: "de2",
    auteur: "aut2",
    disponible: true,
    dateEdition: "2002-09-12T21:53:45.266Z",
  },
];
