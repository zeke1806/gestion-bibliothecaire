import { LecteurService } from "../../lecteur/lecteur.service";
import { LivreService } from "../../livre/livre.service";
import { MutationAddPretArgs, Pret, Resolver } from "../../types";
import { PretEntity } from "../pret.entity";
import { PretService } from "../pret.service";

type T = Resolver<Pret, {}, {}, MutationAddPretArgs>;

export const addPret: T = async (_, { input }) => {
  const pretService = new PretService();
  const lecteurService = new LecteurService();
  const livreService = new LivreService();

  let livre = (await livreService.getById(+input.livreId))!;

  const pret = new PretEntity();
  pret.lecteur = (await lecteurService.getById(+input.lecteurId))!;
  pret.livre = livre;
  pret.datePret = new Date(input.datePret);

  livre.disponible = false;
  await livreService.save(livre);
  
  const result = await pretService.save(pret);
  return {
    id: result.id.toString(),
    datePret: result.datePret.toString()
  };
}