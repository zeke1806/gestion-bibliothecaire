import React, { FC } from "react";
import { useAddLecteur } from "../../services/addLecteur";
import FormLecteur from "./FormLecteur";

const AddLecteur: FC = () => {
  const { form, handleChange, submit } = useAddLecteur();
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
