import { Lecteur, Resolver } from "../../types";
import { LecteurService } from "../lecteur.service";

type T = Resolver<Lecteur[]>;
export const lecteurs: T = async () => {
  const lecteurService = new LecteurService();
  const result = await lecteurService.getAll();
  return result.map(l => ({
    id: l.numLecteur.toString(),
    nom: l.nom
  }))
}