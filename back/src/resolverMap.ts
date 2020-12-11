import { IResolvers } from "graphql-tools";
import { addLecteur } from "./lecteur/resolvers/addLecteur";
import { delLecteur } from "./lecteur/resolvers/delLecteur";
import { addLivre } from "./livre/resolvers/addLivre"
import { delLivre } from "./livre/resolvers/delLivre";
import { addPret } from "./pret/resolvers/addPret";
import { delPret } from "./pret/resolvers/delPret";

import pretFieldResolvers from "./pret/fieldResolvers";
import livreFieldResolvers from "./livre/fieldResolvers";
import lecteurFieldResolvers from "./lecteur/fieldResolvers";

const helloWorld = (): string => "Hello world";

const resolverMap: IResolvers = {
  Query: {
    helloWorld,
  },

  Mutation: {
    addLecteur,
    delLecteur,
    addLivre,
    delLivre,
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
