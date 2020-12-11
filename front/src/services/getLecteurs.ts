import { useEffect } from "react";
import { lecteurs } from "../api/lecteur";
//@ts-ignore
import { GraphQLNormalizr } from 'graphql-normalizr'

export const useGetLecteurs = () => {
  useEffect(() => {
    const asyncFunc = async () => {
      const normalizer = new GraphQLNormalizr();
      const result = await lecteurs();
      const normalizedResult = normalizer.normalize(result);
    };
    asyncFunc();
  }, [])
}