import React, { FC } from 'react';
import { NLecteurProvider } from './lecteur';

export const NormalizedProvider: FC<any> = ({children}) => {
  return [NLecteurProvider].reduce((acc, Cur) => {
    return <Cur>
      {acc}
    </Cur>
  }, children);
}