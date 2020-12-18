import React, { FC } from "react";
import { LecteurProvider } from "./lecteurs";
import { NormalizedProvider } from "./normalized";

export const StoreProvider: FC<any> = ({children}) => {
  return [NormalizedProvider, LecteurProvider].reduce((acc, Cur) => {
    return <Cur>
      {acc}
    </Cur>
  }, children)
}