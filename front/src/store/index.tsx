import React, { FC } from "react";
import { NormalizedProvider } from "./normalized";

export const StoreProvider: FC<any> = ({children}) => {
  return [NormalizedProvider].reduce((acc, Cur) => {
    return <Cur>
      {acc}
    </Cur>
  }, children)
}