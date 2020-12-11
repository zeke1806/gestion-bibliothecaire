import React, { FC } from "react";
import { useCreateLecteur } from "../../services/createLecteur";
import FormLecteur from "./FormLecteur";

const AddLecteur: FC = () => {
  const { form, handleChange, submit } = useCreateLecteur();
  return (
    <FormLecteur
      type="add"
      value={form}
      onChange={handleChange}
      submit={submit}
    />
  );
};

export default AddLecteur;
