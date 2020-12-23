import React, { FC } from "react";
import { useRoute } from "@react-navigation/native";
import Space from "../public/Space";
import FormLivre from "./FormLivre";
import { useUpdateLivre } from "../../services/updateLivre";
import { Livre } from "../../api/types";

const UpdateLivre: FC = () => {
  const toUpdateLivre = useRoute().params as Livre;

  const { form, handleChange, submit } = useUpdateLivre({
    id: toUpdateLivre.id,
    input: {
      design: toUpdateLivre.design,
      auteur: toUpdateLivre.auteur,
      dateEdition: toUpdateLivre.dateEdition,
      disponible: toUpdateLivre.disponible,
    },
  });

  return (
    <>
      <Space />
      <FormLivre
        type="update"
        value={form}
        onChange={handleChange}
        submit={submit}
      />
    </>
  );
};

export default UpdateLivre;
