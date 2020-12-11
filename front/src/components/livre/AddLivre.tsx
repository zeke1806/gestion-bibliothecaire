import React, { FC } from "react";
import { useCreateLivre } from "../../services/createLivre";
import FormLivre from "./FormLivre";

const AddLivre: FC = () => {
  const { form, handleChange, submit } = useCreateLivre();
  return (
    <FormLivre
      type="add"
      value={form}
      onChange={handleChange}
      submit={submit}
    />
  );
};

export default AddLivre;
