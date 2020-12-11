import { Livre, LivreInput, MutationUpdateLivreArgs, Resolver } from "../../types";
import { LivreEntity } from "../livre.entity";
import { LivreService } from "../livre.service";

type T = Resolver<Livre, {}, {}, MutationUpdateLivreArgs>;
export const updateLivre: T = async (_, { id, input }) => {
  const livreService = new LivreService();
  const livre = (await livreService.getById(+id))!;
  Object.assign<LivreEntity, LivreInput>(livre, input);
  const result = await livreService.save(livre);
  return {
    id: result.numLivre.toString(),
    auteur: result.auteur,
    design: result.design,
    dateEdition: result.dateEdition.toString(),
    disponible: result.disponible,
  }
}