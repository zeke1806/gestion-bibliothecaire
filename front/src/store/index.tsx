import React, { FC } from "react";
import { NormalizeProvider } from "./normalize";

export const StoreProvider: FC<any> = ({children}) => {
  return [NormalizeProvider].reduce((acc, Cur) => {
    return <Cur>
      {acc}
    </Cur>
  }, children)
}