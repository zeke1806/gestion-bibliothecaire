import React, { FC } from "react";
import FormLecteur from "./FormLecteur";
import { useRoute } from "@react-navigation/native";
import Space from "../public/Space";
import { useUpdateLecteur } from "../../services/updateLecteur";
import { Lecteur } from "../../api/types";
import AddPret from "../pret/AddPret";
import ListPret from "../pret/ListPret";

const UpdateLecteur: FC = () => {
  const toUpdateLecteur = useRoute().params as Lecteur;

  const { form, handleChange, submit } = useUpdateLecteur({
    id: toUpdateLecteur.id,
    nom: toUpdateLecteur.nom,
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
      <Space />
      <AddPret />
      <ListPret id={toUpdateLecteur.id} />
    </>
  );
};

export default UpdateLecteur;
