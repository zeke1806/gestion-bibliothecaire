import { useMutation } from "@apollo/client";
import produce from "immer";
import {
  DelLecteurData,
  DEL_LECTEUR,
  LECTEURS,
  LecteursData,
} from "../api/gqls/lecteur";
import { MutationDelLecteurArgs } from "../api/types";

export const useDelLecteur = (variables: MutationDelLecteurArgs) => {
  const [delLecteur, { loading }] = useMutation<
    DelLecteurData,
    MutationDelLecteurArgs
  >(DEL_LECTEUR, {
    update(cache) {
      const lecteursData = cache.readQuery<LecteursData>({
        query: LECTEURS,
      });
      if (lecteursData) {
        cache.writeQuery({
          query: LECTEURS,
          data: produce(lecteursData, (draft) => {
            draft.lecteurs.splice(
              draft.lecteurs.findIndex((elt) => elt.id === variables.id)
            );
          }),
        });
      }
    },
  });

  const submit = () => {
    delLecteur({ variables });
  };

  return {
    loading,
    submit,
  };
};
