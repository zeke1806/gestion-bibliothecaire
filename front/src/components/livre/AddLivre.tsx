import React, { FC } from "react";
import { useAddLivre } from "../../services/addLivre";
import FormLivre from "./FormLivre";

const AddLivre: FC = () => {
  const { form, handleChange, submit } = useAddLivre();
  return (
    <FormLivre
      type="add"
      value={form.input}
      onChange={handleChange}
      submit={submit}
    />
  );
};

export default AddLivre;
