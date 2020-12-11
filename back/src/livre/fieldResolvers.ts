import { PretService } from "../pret/pret.service";
import { Livre, Resolver } from "../types";
import { LivreService } from "./livre.service";

type NbPretFR = Resolver<number, Livre, {}>;
const nbPret: NbPretFR = async ({ id }) => {
  const pretService = new PretService();
  const livreService = new LivreService();
  const livre = (await livreService.getById(+id))!;
  const prets = await pretService.findByLivre(livre);
  return prets.length;
}

export default {
  nbPret
}