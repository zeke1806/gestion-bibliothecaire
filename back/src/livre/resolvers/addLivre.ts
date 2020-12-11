import { Livre, LivreInput, MutationAddLivreArgs, Resolver } from "../../types";
import { LivreEntity } from "../livre.entity";
import { LivreService } from "../livre.service";

type T = Resolver<Livre, {}, {}, MutationAddLivreArgs>

export const addLivre: T = async (_, { input }) => {
  const lecteurService = new LivreService();
  const livre = new LivreEntity();
  Object.assign<LivreEntity, LivreInput>(livre, input);

  const result = await lecteurService.save(livre);
  return {
      id: result.numLivre.toString(),
      design: result.design,
      auteur: result.auteur,
      dateEdition: result.dateEdition.toString(),
      dispobible: result.disponible,
  };
}