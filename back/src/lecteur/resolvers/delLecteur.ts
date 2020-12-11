import { Lecteur, MutationDelLecteurArgs, Resolver } from "../../types";
import { LecteurService } from "../lecteur.service";

type T = Resolver<boolean, {}, {}, MutationDelLecteurArgs>

export const delLecteur: T = async (_, input) => {
  const lecteurService = new LecteurService();
  const toRemove = await lecteurService.getById(+input.id);
  if(toRemove) lecteurService.delOne(toRemove); 
  
  return true;
}