import { IResolvers } from "graphql-tools";
import { lecteurs } from "./lecteur/resolvers/lecteurs";
import { addLecteur } from "./lecteur/resolvers/addLecteur";
import { delLecteur } from "./lecteur/resolvers/delLecteur";
import { updateLecteur } from "./lecteur/resolvers/updateLecteur";
import { livres } from "./livre/resolvers/livres";
import { addLivre } from "./livre/resolvers/addLivre"
import { delLivre } from "./livre/resolvers/delLivre";
import { updateLivre } from "./livre/resolvers/updateLivre";
import { addPret } from "./pret/resolvers/addPret";
import { delPret } from "./pret/resolvers/delPret";

import pretFieldResolvers from "./pret/fieldResolvers";
import livreFieldResolvers from "./livre/fieldResolvers";
import lecteurFieldResolvers from "./lecteur/fieldResolvers";

const helloWorld = (): string => "Hello world";

const resolverMap: IResolvers = {
  Query: {
    helloWorld,
    livres,
    lecteurs
  },

  Mutation: {
    addLecteur,
    delLecteur,
    updateLecteur,
    addLivre,
    delLivre,
    updateLivre,
    addPret,
    delPret
  },

  Pret: {
    ...pretFieldResolvers
  },

  Livre: {
    ...livreFieldResolvers
  },

  Lecteur: {
    ...lecteurFieldResolvers
  }
};

export default resolverMap;
