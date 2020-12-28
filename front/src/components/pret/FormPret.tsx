import { Picker } from "@react-native-picker/picker";
import React, { FC } from "react";
import { Button, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import { PretInput } from "../../api/types";
import { uselivres } from "../../services/livres";
import themes from "../../theme";
import DatePicker from "../public/DatePicker";
import SectionTitle from "../public/SectionTitle";

const FormPret: FC<{
  value: PretInput;
  onChange: (key: keyof PretInput, value: string) => void;
  submit: () => void;
}> = ({ value, onChange, submit }) => {
  const { livres } = uselivres();

  return (
    <View>
      <SectionTitle iconName="pencil" text="Prêt" />
      <Text>Livres disponibles</Text>
      <Picker
        selectedValue={value.livreId}
        // eslint-disable-next-line react-native/no-inline-
        style={{ width: "50%" }}
        onValueChange={function (itemValue) {
          onChange("livreId", String(itemValue));
        }}
      >
        <Picker.Item label="choisir" value="" />

        {livres
          .filter((liv) => liv.disponible)
          .map((liv) => (
            <Picker.Item label={liv.design} value={liv.id} key={liv.id} />
          ))}
      </Picker>
      <View>
        <View style={tailwind("flex-row items-center")}>
          <View style={tailwind("flex-1")}>
            <DatePicker
              placeholder="Date de location"
              value={value.datePret}
              onChange={(date) => onChange("datePret", date)}
            />
          </View>
        </View>
        <Button
          disabled={value.livreId === "" && true}
          onPress={submit}
          title="pret"
          color={themes.colors.secondary}
        />
      </View>
    </View>
  );
};

export default FormPret;
