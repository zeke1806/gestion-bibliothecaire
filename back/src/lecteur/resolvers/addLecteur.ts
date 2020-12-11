import { Lecteur, MutationAddLecteurArgs, Resolver } from "../../types";
import { LecteurEntity } from "../lecteur.entity";
import { LecteurService } from "../lecteur.service";

type T = Resolver<Lecteur, {}, {}, MutationAddLecteurArgs>

export const addLecteur: T = async (_, input) => {
  const lecteurService = new LecteurService();
  const lecteur = new LecteurEntity();
  lecteur.nom = input.nom;
  const result = await lecteurService.save(lecteur);
  
  return {
    id: result.numLecteur.toString(),
    nom: result.nom
  } as Lecteur;
}