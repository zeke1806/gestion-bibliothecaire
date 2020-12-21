import React, { FC } from "react";

const Fake: FC = ({children}) => <>{children}</>;

export const StoreProvider: FC<any> = ({children}) => {
  return [Fake].reduce((acc, Cur) => {
    return <Cur>
      {acc}
    </Cur>
  }, children)
}