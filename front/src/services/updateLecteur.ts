import { useImmer } from "use-immer";
import { IFormLecteur, ILecteur } from "../types";

export const useUpdateLecteur = (initialData: ILecteur) => {
  const [form, setForm] = useImmer<IFormLecteur>({
    nom: initialData.nom,
  });

  const handleChange = (key: keyof IFormLecteur, value: string) => {
    setForm((draft) => {
      draft[key] = value;
    });
  };

  const submit = async () => {
    alert(initialData.idLecteur + " " + form.nom);
    setForm((draft) => {
      draft.nom = "";
    });
  };

  return {
    form,
    handleChange,
    submit,
  };
};
