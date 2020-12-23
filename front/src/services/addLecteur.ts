import { useMutation } from "@apollo/client";
import { useImmer } from "use-immer";
import { LECTEUR_FRAG } from "../api/fragments";
import { AddLecteurData, ADD_LECTEUR } from "../api/gqls/lecteur";
import { MutationAddLecteurArgs } from "../api/types";

export const useAddLecteur = () => {
  const [form, setForm] = useImmer<MutationAddLecteurArgs>({
    nom: "",
  });
  const [addLecteur, { loading }] = useMutation<
    AddLecteurData,
    MutationAddLecteurArgs
  >(ADD_LECTEUR, {
    update(cache, { data }) {
      if (data) {
        cache.modify({
          fields: {
            lecteurs(existingLecteurs) {
              const newLecteurRef = cache.writeFragment({
                fragmentName: "LecteurFrag",
                data: data.addLecteur,
                fragment: LECTEUR_FRAG,
              });

              return [newLecteurRef, ...existingLecteurs];
            },
          },
        });
      }
    },
  });

  const submit = () => {
    addLecteur({ variables: form });
  };

  const handleChange = (key: "nom", value: string) => {
    setForm((draft) => {
      draft[key] = value;
    });
  };

  return {
    form,
    handleChange,
    loading,
    submit,
  };
};
