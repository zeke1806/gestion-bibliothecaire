import { useEffect } from "react";
import { lecteurs } from "../api/lecteur";
//@ts-ignore
import { GraphQLNormalizr } from 'graphql-normalizr'
import { useNLecteur } from "../store/normalized/lecteur";

export const useGetLecteurs = () => {
  const { actions } = useNLecteur();
  useEffect(() => {
    const asyncFunc = async () => {
      const normalizer = new GraphQLNormalizr();
      const result = await lecteurs();
      const normalizedResult = normalizer.normalize(result);
      actions.set(normalizedResult);
    };
    asyncFunc();
  }, [])
}