import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import tailwind from "tailwind-rn";
import { Maybe, Pret } from "../../api/types";
import { useDelPret } from "../../services/delPret";
import { useLecteurs } from "../../services/lecteurs";
import themes from "../../theme";
import { formatDate } from "../../utils";
import SectionTitle from "../public/SectionTitle";

const ListItem: FC<{
  item: Maybe<Pret> | null | undefined;
}> = ({ item }) => {
  const { submit } = useDelPret(item);

  return (
    <TouchableOpacity style={tailwind("flex-row p-1 justify-between")}>
      <View style={tailwind("flex-row")}>
        <Ionicons
          name="book-outline"
          size={themes.space * 2}
          style={tailwind("mr-5")}
        />
        <View>
          <Text>Nom: {item?.livre?.design}</Text>
          <Text>Date: {formatDate(item?.datePret)} </Text>
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

const ListPret: FC<{
  id: string;
}> = ({ id }) => {
  const renderItem = ({ item }: { item: Maybe<Pret> | null | undefined }) => {
    return <ListItem item={item} />;
  };
  const { lecteurs } = useLecteurs();

  return (
    <>
      <SectionTitle iconName="list" text="List de prêt" />
      <FlatList
        data={lecteurs.filter((l) => l.id === id)[0].prets}
        renderItem={renderItem}
        keyExtractor={(item) => String(item?.id)}
      />
    </>
  );
};

export default ListPret;
