import { useEffect } from "react";
import { lecteurs } from "../api/lecteur";
import { useNormalized } from "../store/normalized";
import { useLecteurs } from "../store/lecteurs";

export const useGetLecteurs = () => {
  const { actions } = useNormalized();
  const { actions: lecteursActions } = useLecteurs();
  useEffect(() => {
    const asyncFunc = async () => {
      const result = await lecteurs();
      actions.set(result);
      lecteursActions.set(result.data.lecteurs.map(l => l.id));
    };
    asyncFunc();
  }, [])
}