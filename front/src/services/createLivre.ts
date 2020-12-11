import { useImmer } from "use-immer";
import { IFormLivre } from "../types";

export const useCreateLivre = () => {
  const [form, setForm] = useImmer<IFormLivre>({
    design: "",
    auteur: "",
    dateEdition: new Date().toISOString(),
    disponible: true,
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
      "design: " +
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
    submit,
    handleChange,
  };
};
