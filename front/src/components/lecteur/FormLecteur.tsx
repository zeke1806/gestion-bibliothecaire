import React, { FC } from "react";
import { Button, View } from "react-native";
import themes from "../../theme";
import { IFormLecteur } from "../../types";
import MyTextInput from "../public/MyTextInput";
import SectionTitle from "../public/SectionTitle";

const FormLecteur: FC<{
  type: "add" | "update";
  value: IFormLecteur;
  onChange: (key: keyof IFormLecteur, value: string) => void;
  submit: () => void;
}> = ({ type, value, onChange, submit }) => {
  return (
    <View>
      <SectionTitle
        iconName={type === "add" ? "add" : "pencil"}
        text={type === "add" ? "Ajout de lecteur" : "Modifier le lecteur"}
      />
      <View>
        <MyTextInput
          value={value.nom}
          placeholder="Nom"
          onChange={(text) => onChange("nom", text)}
        />
        <Button
          onPress={submit}
          title={type === "add" ? "ajouter" : "modifier"}
          color={themes.colors.secondary}
        />
      </View>
    </View>
  );
};

export default FormLecteur;
