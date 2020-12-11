import { PretService } from "../pret/pret.service";
import { Lecteur, Pret, Resolver } from "../types";
import { LecteurService } from "./lecteur.service";

type PretsFR = Resolver<Pret[], Lecteur, {}, {}>;
const prets: PretsFR = async ({ id }) => {
  const lecteurService = new LecteurService();
  const pretService = new PretService();
  const lecteur = (await lecteurService.getById(+id))!;
  const prets = await pretService.findByLecteur(lecteur);
  return prets.map(p => ({
    id: p.id.toString(),
    datePret: p.datePret.toString()
  }));
}

export default {
  prets
}