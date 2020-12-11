import { Livre, Resolver } from "../../types";
import { LivreService } from "../livre.service";

type T = Resolver<Livre[]>;
export const livres: T = async () => {
  const livreService = new LivreService();
  const result = await livreService.getAll();
  return result.map(l => ({
    id: l.numLivre.toString(),
    design: l.design,
    auteur: l.auteur,
    dateEdition: l.dateEdition.toString(),
    disponible: l.disponible
  }))
}