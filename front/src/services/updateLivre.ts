import { useMutation } from "@apollo/client";
import { useImmer } from "use-immer";
import { UpdateLivreData, UPDATE_LIVRE } from "../api/gqls/livre";
import { LivreInput, MutationUpdateLivreArgs } from "../api/types";

export const useUpdateLivre = (initialData: MutationUpdateLivreArgs) => {
  const [form, setForm] = useImmer<LivreInput>(initialData.input);
  const [updateLivre, { loading }] = useMutation<
    UpdateLivreData,
    MutationUpdateLivreArgs
  >(UPDATE_LIVRE);

  const handleChange = (key: keyof LivreInput, value: string) => {
    if (key === "dateEdition") {
      setForm((draft) => {
        draft.dateEdition = value;
      });
    } else if (key === "disponible") {
      setForm((draft) => {
        draft[key] = value == "true";
      });
    } else {
      setForm((draft) => {
        draft[key] = value;
      });
    }
  };

  const submit = async () => {
    updateLivre({ variables: { id: initialData.id, input: form } });
  };

  return {
    form,
    handleChange,
    submit,
    loading,
  };
};
