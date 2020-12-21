import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import tailwind from "tailwind-rn";
import themes from "../../theme";
import { ILecteur } from "../../types";
import SectionTitle from "../public/SectionTitle";

const ListItem: FC<{
  item: ILecteur;
}> = ({ item }) => {
  const navigation = useNavigation();
  //const {submit} = useDeleteLecteur(item.idLecteur);

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
          <Text>Numero: {item.idLecteur}</Text>
          <Text>Nom: {item.nom}</Text>
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

const ListLecteur: FC = () => {
  
  const renderItem = ({ item }: { item: ILecteur }) => {
    return <ListItem item={item} />;
  };

  return (
    <>
      <SectionTitle iconName="list" text="List de lecteur" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.idLecteur)}
      />
    </>
  );
};

export default ListLecteur;

const data = [
  {
    idLecteur: 1,
    nom: "tony",
  },
  {
    idLecteur: 2,
    nom: "joel",
  },
];
