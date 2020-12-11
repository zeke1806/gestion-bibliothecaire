import { useImmer } from "use-immer";
import { IFormLecteur, IFormLivre, ILivre } from "../types";

export const useUpdateLivre = (initialData: ILivre) => {
  const [form, setForm] = useImmer<IFormLivre>({
    design: initialData.design,
    auteur: initialData.auteur,
    dateEdition: initialData.dateEdition,
    disponible: initialData.disponible,
  });

  const handleChange = (key: keyof IFormLivre, value: string) => {
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
    alert(
      initialData.idLivre +
        " design: " +
        form.design +
        " auteur: " +
        form.auteur +
        " " +
        form.disponible +
        " " +
        form.dateEdition
    );
  };

  return {
    form,
    handleChange,
    submit,
  };
};
