import { useMutation } from "@apollo/client";
import { useImmer } from "use-immer";
import { UpdateLecteurData, UPDATE_LECTEUR } from "../api/gqls/lecteur";
import { MutationUpdateLecteurArgs } from "../api/types";

export const useUpdateLecteur = (initialData: MutationUpdateLecteurArgs) => {
  const [form, setForm] = useImmer<MutationUpdateLecteurArgs>(initialData);
  const [updateLecteur, { loading }] = useMutation<
    UpdateLecteurData,
    MutationUpdateLecteurArgs
  >(UPDATE_LECTEUR);

  const handleChange = (key: "nom", value: string) => {
    setForm((draft) => {
      draft[key] = value;
    });
  };

  const submit = async () => {
    updateLecteur({ variables: form });
  };

  return {
    form,
    handleChange,
    submit,
    loading,
  };
};
