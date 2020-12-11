import React, { FC } from "react";
import FormLecteur from "./FormLecteur";
import { useRoute } from "@react-navigation/native";
import Space from "../public/Space";
import { ILecteur } from "../../types";
import { useUpdateLecteur } from "../../services/updateLecteur";

const UpdateLecteur: FC = () => {
  const toUpdateLecteur = useRoute().params as ILecteur;

  const { form, handleChange, submit } = useUpdateLecteur(toUpdateLecteur);
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
