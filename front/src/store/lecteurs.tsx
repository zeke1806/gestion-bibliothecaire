import React, { createContext, FC, useContext, useState } from 'react';
import { Lecteur } from '../api/types';
import { ERROR_STORE } from '../configs';
import { useNormalized } from './normalized';

type State = string[];

interface Actions {
  set(value: State): void;
}

interface IContext {
  state: State;
  actions: Actions;
}

const Context = createContext<IContext | undefined>(undefined);

export const LecteurProvider: FC = ({ children }) => {
  const [state, setState] = useState<State>([]);
  const contextValue: IContext = {
    state,
    actions: {
      set(value) {
        setState(value);
      }
    }
  }
  return <Context.Provider value={contextValue}>
    {children}
  </Context.Provider>
}

export const useLecteurs = () => {
  const { state: normalized } = useNormalized();
  const context = useContext(Context);
  if(!context) throw ERROR_STORE('Lecteur');
  return {
    ...context,
    state: context.state.map(id => normalized[`Lecteur:${id}`] as Lecteur)
  }
}