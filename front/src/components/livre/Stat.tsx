import React, { FC } from "react";
import SectionTitle from "../public/SectionTitle";
import { Text } from "react-native";

const Stat: FC<{
  nbPret: number | null | undefined;
}> = ({ nbPret }) => {
  return (
    <>
      <SectionTitle iconName="stats-chart-outline" text="Statistique" />
      <Text>Nombre de prêt du livre : {nbPret}</Text>
    </>
  );
};

export default Stat;
