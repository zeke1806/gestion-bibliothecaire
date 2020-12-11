import { IResolvers } from "graphql-tools";

const helloWorld = (): string => "Hello world";

const resolverMap: IResolvers = {
  Query: {
    helloWorld,
  },
  Mutation: {
    
  },
};

export default resolverMap;
