import { useImmer } from "use-immer";
import { IFormLecteur } from "../types";

export const useCreateLecteur = () => {
  const [form, setForm] = useImmer<IFormLecteur>({
    nom: "",
  });

  const handleChange = (key: keyof IFormLecteur, value: string) => {
    setForm((draft) => {
      draft[key] = value;
    });
  };

  const submit = async () => {
    alert(form.nom);
    setForm((draft) => {
      draft.nom = "";
    });
  };

  return {
    form,
    submit,
    handleChange,
  };
};
