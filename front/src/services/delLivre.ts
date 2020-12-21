import { useMutation } from "@apollo/client";
import produce from "immer";
import { DelLivreData, DEL_LIVRE, LIVRES, LivresData } from "../api/gqls/livre";
import { MutationDelLivreArgs } from "../api/types";

export const useDelLivre = (variables: MutationDelLivreArgs ) => {
  const [delLivre, { loading }] = useMutation<DelLivreData, MutationDelLivreArgs>(DEL_LIVRE, {
    update(cache) {
      const livresData = cache.readQuery<LivresData>({
        query: LIVRES
      });
      if(livresData) {
        cache.writeQuery<LivresData>({
          query: LIVRES,  
          data: produce(livresData, draft => {
            draft.livres.splice(
              draft.livres.findIndex(elt => elt.id === variables.id),
              1
            );
          })
        })
      }
    }
  });

  const submit = () => {
    delLivre({ variables });
  }

  return {
    loading,
    submit
  }
}