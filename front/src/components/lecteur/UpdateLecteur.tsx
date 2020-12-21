import React, { FC } from "react";
import FormLecteur from "./FormLecteur";
import { useRoute } from "@react-navigation/native";
import Space from "../public/Space";
import { useUpdateLecteur } from "../../services/updateLecteur";
import { Lecteur } from "../../api/types";

const UpdateLecteur: FC = () => {
  const toUpdateLecteur = useRoute().params as Lecteur;

  const { form, handleChange, submit } = useUpdateLecteur({
    id: toUpdateLecteur.id,
    nom: toUpdateLecteur.nom
  });
  
  return (
    <>
      <Space />
      <FormLecteur
        type="update"
        value={form}
        onChange={handleChange}
        submit={submit}
      />
    </>
  );
};

export default UpdateLecteur;
