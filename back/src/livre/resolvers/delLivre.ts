import { MutationDelLivreArgs, Resolver } from "../../types"
import { LivreService } from "../livre.service"

type T = Resolver<boolean, {}, {}, MutationDelLivreArgs>

export const delLivre: T = async (_, { id }) => {
  const livreService = new LivreService();
  const toDel = await livreService.getById(+id);
  if(toDel) livreService.delOne(toDel);
  return true;
}