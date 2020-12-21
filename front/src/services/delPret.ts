import { useMutation } from "@apollo/client";
import produce from "immer";
import { LECTEURS, LecteursData } from "../api/gqls/lecteur";
import { DelPretData, DEL_PRET } from "../api/gqls/pret"
import { MutationDelPretArgs } from "../api/types"

export const useDelPret = (variables: MutationDelPretArgs) => {
  const [ delPret, { loading } ] = useMutation<DelPretData, MutationDelPretArgs>(DEL_PRET, {
    update(cache) {
      const lecteursData = cache.readQuery<LecteursData>({
        query: LECTEURS,
      });
      if(lecteursData) {
        cache.writeQuery<LecteursData>({
          query: LECTEURS,
          data: produce(lecteursData, draft => {
            draft.lecteurs.forEach(lect => {
              const prets = lect.prets;
              if(prets) {
                const index = prets.findIndex(elt => elt!.id === variables.id);
                if(index) {
                  prets.splice(index, 1);
                } 
              }
            })
          })
        });
      }
    }
  });

  const submit = () => {
    delPret({ variables })
  }

  return {
    submit,
    loading
  }
}