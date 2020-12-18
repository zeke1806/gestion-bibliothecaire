import React, { createContext, FC, useContext, useState } from 'react';
//@ts-ignore
import prefixKeys from "prefix-keys";
//@ts-ignore
import { GraphQLNormalizr } from 'graphql-normalizr';
import { ERROR_STORE } from '../configs';

const { normalize } = new GraphQLNormalizr({
  typenames: true,
});

interface State {
  [key: string]: any;
}

interface Actions {
  set(data: Object): void;
  update(key: string, value: Object): void;
  delete(key: string): void;
  add(key: string, value: Object): void;
}

interface IContext {
  state: State;
  actions: Actions;
}

const Context = createContext<IContext | undefined>(undefined);

export const NormalizedProvider: FC = ({ children }) => {
  const [state, setState] = useState<State>({});

  const contextValue: IContext = {
    state,
    actions: {
      set(data) {
        const nData = normalize(data);
        const prefixedData = Object.keys(nData).reduce((acc, cur) => {
          const prefix = nData[cur][Object.keys(nData[cur])[0]].__typename;
          const key = prefix + ':';
          return {
            ...acc,
            ...prefixKeys(key, nData[cur])
          }
        }, {});
        setState(state => ({
          ...state,
          ...prefixedData
        }))
      },
  
      update(key, value) {
        setState(state => ({
          [key]: {
            ...state,
            [key]: value
          }
        }))
      },
  
      delete(key) {
        setState(state => Object.keys(state).reduce((acc, cur) => {
          if(cur !== key) acc[cur] = state[cur];
          return acc;
        }, {} as State))
      },
  
      add(key, value) {
        setState(state => ({
          ...state,
          [key]: value
        }))
      }
    }
  }

  return <Context.Provider value={contextValue}>
    {children}
  </Context.Provider>
}

export const useNormalized = () => {
  const context = useContext(Context);
  if(!context) throw ERROR_STORE('Normalized');
  return context;
}
