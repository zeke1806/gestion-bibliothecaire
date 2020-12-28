import { useRoute } from "@react-navigation/native";
import React, { FC } from "react";
import { Lecteur } from "../../api/types";
import { useAddPret } from "../../services/addPret";
import FormPret from "./FormPret";

const AddPret: FC<{}> = () => {
  const lecteur = useRoute().params as Lecteur;

  const { form, submit, handleChange } = useAddPret(lecteur.id);

  return (
    <>
      <FormPret value={form.input} onChange={handleChange} submit={submit} />
    </>
  );
};

export default AddPret;
