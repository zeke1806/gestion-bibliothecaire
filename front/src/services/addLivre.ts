import { useMutation } from "@apollo/client";
import { useImmer } from "use-immer";
import { LIVRE_FRAG } from "../api/fragments";
import { AddLivreData, ADD_LIVRE } from "../api/gqls/livre";
import { LivreInput, MutationAddLivreArgs } from "../api/types";

export const useAddLivre = () => {
  const [form, setForm] = useImmer<MutationAddLivreArgs>({
    input: {
      design: "",
      auteur: "",
      dateEdition: new Date().toString(),
      disponible: true,
    }
  });
  const [addLivre, { loading }] = useMutation<AddLivreData, MutationAddLivreArgs>(ADD_LIVRE, {
    update(cache, { data }) {
      if(data) {
        cache.modify({
          fields: {
            livres(existingLivres ) {
              const newLivreRef = cache.writeFragment({
                data: data.addLivre,
                fragment: LIVRE_FRAG
              });
              return [newLivreRef, ...existingLivres]
            }
          }
        })
      }
    }
  });

  const handleChange = (key: keyof LivreInput, value: string) => {
    if (key === "dateEdition") {
      setForm((draft) => {
        draft.input.dateEdition = value;
      });
    } else if (key === "disponible") {
      setForm((draft) => {
        draft.input[key] = value == "true";
      });
    } else {
      setForm((draft) => {
        draft.input[key] = value;
      });
    }
  };

  const submit = async () => {
    addLivre({variables: form})
  };

  return {
    form,
    submit,
    handleChange,
    loading
  };
};
