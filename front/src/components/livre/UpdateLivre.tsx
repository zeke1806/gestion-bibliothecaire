import React, { FC } from "react";
import { useRoute } from "@react-navigation/native";
import Space from "../public/Space";
import { ILivre } from "../../types";
import FormLivre from "./FormLivre";
import { useUpdateLivre } from "../../services/updateLivre";

const UpdateLivre: FC = () => {
  const toUpdateLivre = useRoute().params as ILivre;

  const { form, handleChange, submit } = useUpdateLivre(toUpdateLivre);
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
