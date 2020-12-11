import { Lecteur, MutationUpdateLecteurArgs, Resolver } from "../../types";
import { LecteurService } from "../lecteur.service";

type T = Resolver<Lecteur, {}, {}, MutationUpdateLecteurArgs>;

export const updateLecteur: T = async (_, {id, nom}) => {
  const lecteurService = new LecteurService();
  const lecteur = (await lecteurService.getById(+id))!;
  lecteur.nom = nom;
  const result = await lecteurService.save(lecteur);
  return {
    id: result.numLecteur.toString(),
    nom: result.nom
  }
}