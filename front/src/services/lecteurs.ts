import { useQuery } from "@apollo/client"
import { LECTEURS, LecteursData } from "../api/gqls/lecteur"

export const useLecteurs = () => {
  const { data, loading } = useQuery<LecteursData>(LECTEURS);
  const lecteurs = data ? data.lecteurs : [];

  return {
    lecteurs,
    loading
  }
}