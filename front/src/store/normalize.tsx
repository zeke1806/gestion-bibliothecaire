import React, { createContext, FC, useContext } from "react";
import { useImmer } from "use-immer";
import { Lecteur, Livre, Pret } from "../api/types";
import { ERROR_STORE } from "../configs";

type Schema = Lecteur | Livre | Pret;
type SchemaList = Lecteur[] | Livre[] | Pret[];

interface IState {
  [key: string]: Schema;
}

interface IActions {
  set: (value: Schema) => void;
  setMany: (value: SchemaList) => void;
}

interface IContext {
  state: IState;
  actions: IActions;
}

const Context = createContext<IContext | undefined>(undefined);

export const NormalizeProvider: FC = ({children}) => {
  const [state, setState] = useImmer<IState>({});

  const contextValue: IContext = {
    state,
    actions: {
      set(value) {
        setState(draft => {
          const key = `${value.__typename}:${value.id}`;
          draft[key] = value;
        })
      },

      setMany(value) {
        setState(draft => {
          value.forEach((v: Schema) => {
            const key = `${v.__typename}:${v.id}`;
            draft[key] = v;
          })
        })
      }
    }
  }

  return <Context.Provider value={contextValue}>
    {children}
  </Context.Provider>
}

export const useNormalizeCtx = () => {
  const context = useContext(Context);
  if(!context) throw ERROR_STORE('Normalize');
  return context;
}