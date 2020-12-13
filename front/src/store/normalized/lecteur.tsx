import React, { createContext, FC, useContext } from 'react';
import { useImmer } from 'use-immer';
import { Lecteur } from '../../api/types';
import { ERROR_STORE } from '../../configs';

interface IState {
  [key: string]: Lecteur;
}

interface IActions {
  set: (value: IState) => void;
  update: (id: string, value: Lecteur) => void;
  delete: (id: string) => void;
}

type IContext = {
  state: IState;
  actions: IActions;
}

const Context = createContext<IContext | undefined>(undefined);

export const NLecteurProvider: FC = ({children}) => {
  const [state, setState] = useImmer<IState>({});
  const contextValue: IContext = {
    state,
    actions: {
      set(value) {
        setState(draft => {
          Object.assign<IState, IState>(draft, value);
        })
      },
      update(id, value) {
        setState(draft => {
          Object.assign<Lecteur, Lecteur>(draft[id], value);
        })
      },
      delete(id) {
        setState(draft => {
          delete draft[id];
        })
      }
    }
  }
  return <Context.Provider value={contextValue}>
    {children}
  </Context.Provider>
}

export const useNLecteur = () => {
  const context = useContext(Context);
  if(!context) throw ERROR_STORE('NLecteur');
  return context;
}