import { useMutation } from "@apollo/client";
import produce from "immer";
import { useImmer } from "use-immer";
import { LECTEURS, LecteursData } from "../api/gqls/lecteur";
import { AddPretData, ADD_PRET } from "../api/gqls/pret";
import { MutationAddPretArgs, PretInput } from "../api/types";

export const useAddPret = (lecteurId: string) => {
  const [form, setForm] = useImmer<MutationAddPretArgs>({
    input: {
      lecteurId,
      livreId: "",
      datePret: new Date().toString(),
    },
  });
  const [addPret, { loading }] = useMutation<AddPretData, MutationAddPretArgs>(
    ADD_PRET,
    {
      update(cache, { data }) {
        if (data) {
          const lecteursData = cache.readQuery<LecteursData>({
            query: LECTEURS,
          });
          if (lecteursData) {
            cache.writeQuery<LecteursData>({
              query: LECTEURS,
              data: produce(lecteursData, (draft) => {
                draft.lecteurs.forEach((lect) => {
                  if (lect.id === lecteurId && lect.prets) {
                    lect.prets.unshift(data.addPret);
                  }
                });
              }),
            });
          }
        }
      },
    }
  );

  const handleChange = (key: keyof PretInput, value: string) => {
    if (key === "datePret") {
      setForm((draft) => {
        draft.input.datePret = value;
      });
    } else {
      setForm((draft) => {
        draft.input[key] = value;
      });
    }
  };

  const submit = () => {
    addPret({ variables: form });
    setForm((draft) => {
      draft.input.livreId = "";
    });
  };

  return {
    form,
    loading,
    submit,
    handleChange,
  };
};
