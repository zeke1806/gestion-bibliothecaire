import React, { createContext, FC, useContext } from "react";
import { useImmer } from "use-immer";
import { Lecteur, Livre, Pret } from "../api/types";
import { ERROR_STORE } from "../configs";

type Values = Lecteur | Livre | Pret;

interface INormalizedLecteur {
  [key: string]: Lecteur;
}
interface INormalizedLivre {
  [key: string]: Livre;
}
interface INormalizedPret {
  [key: string]: Livre;
}

interface IState {
  lecteur: INormalizedLecteur;
  livre: INormalizedLivre;
  pret: INormalizedPret;
}

interface IActions {
  set: (value: Values) => void;
}

interface IContext {
  state: IState;
  actions: IActions;
}

const Context = createContext<IContext | undefined>(undefined);

export const NormalizedProvider: FC = ({children}) => {
  const [state, setState] = useImmer<IState>({
    lecteur: {},
    livre: {},
    pret: {}
  });

  const contextValue: IContext = {
    state,
    actions: {
      set(value) {
        setState(draft => {
          
        })
      },
    }
  }

  return <Context.Provider value={contextValue}>
    {children}
  </Context.Provider>
}

export const useNormalizesCtx = () => {
  const context = useContext(Context);
  if(!context) throw ERROR_STORE('Normalized');
  return context;
}