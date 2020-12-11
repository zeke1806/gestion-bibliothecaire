import { LivreService } from "../livre/livre.service";
import { Livre, Pret, Resolver } from "../types";
import { PretService } from "./pret.service";

type LivreFR = Resolver<Livre, Pret, {}>;

const livre: LivreFR = async ({ id }) => {
  const pretService = new PretService();
  const livreService = new LivreService();
  const pret = (await pretService.getById(+id))!;
  const livre = (await livreService.getById(pret.id))!;
  return {
    id: livre.numLivre.toString(),
    design: livre.design,
    auteur: livre.auteur,
    dateEdition: livre.dateEdition.toString(),
    disponible: livre.disponible,
  }
}

export default {
  livre
}