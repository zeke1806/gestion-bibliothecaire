import React, { FC } from "react";
import { Button, View } from "react-native";
import tailwind from "tailwind-rn";
import themes from "../../theme";
import { IFormLecteur, IFormLivre } from "../../types";
import DatePicker from "../public/DatePicker";
import MyTextInput from "../public/MyTextInput";
import SectionTitle from "../public/SectionTitle";

const FormLivre: FC<{
  type: "add" | "update";
  value: IFormLivre;
  onChange: (key: keyof IFormLivre, value: string) => void;
  submit: () => void;
}> = ({ type, value, onChange, submit }) => {
  return (
    <View>
      <SectionTitle
        iconName={type === "add" ? "add" : "pencil"}
        text={type === "add" ? "Ajout de livre" : "Modifier le livre"}
      />
      <View>
        <MyTextInput
          value={value.design}
          placeholder="Design"
          onChange={(text) => onChange("design", text)}
        />
        <MyTextInput
          value={value.auteur}
          placeholder="Auteur"
          onChange={(text) => onChange("auteur", text)}
        />
        <View style={tailwind("flex-row items-center")}>
          <View style={tailwind("flex-1")}>
            <DatePicker
              placeholder="Date de location"
              value={value.dateEdition}
              onChange={(date) => onChange("dateEdition", date)}
            />
          </View>
        </View>
        <Button
          onPress={submit}
          title={type === "add" ? "ajouter" : "modifier"}
          color={themes.colors.secondary}
        />
      </View>
    </View>
  );
};

export default FormLivre;
