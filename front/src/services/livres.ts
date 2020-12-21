import { useQuery } from "@apollo/client"
import { LIVRES, LivresData } from "../api/gqls/livre"

export const uselivres = () => {
  const { data, loading } = useQuery<LivresData>(LIVRES);
  const livres = data ? data.livres : [];

  return {
    livres,
    loading
  }
}