import { MutationDelPretArgs, Resolver } from "../../types";
import { PretService } from "../pret.service";

type T = Resolver<boolean, {}, {}, MutationDelPretArgs>;

export const delPret: T = async (_, { id }) => {
  const pretService = new PretService();
  const toDel = await pretService.getById(+id);
  if(toDel) pretService.delOne(toDel);
  return true;
}