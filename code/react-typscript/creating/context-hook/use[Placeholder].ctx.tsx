import { createContext, useContext } from "react";

type CtxProps = {
   children: React.ReactNode;
};
type CtxType = {
   text: string | null;
};

const PlaceholderContext = createContext<CtxType | null>(null);
function PlaceholderProvider({ children }: CtxProps): JSX.Element {
   return (
      <PlaceholderContext.Provider value={{ text: "sdsds" }}>
         {/* chlidren */}
         {children}
         {/* chlidren */}
      </PlaceholderContext.Provider>
   );
}

function usePlaceholderCtx() {
   return useContext(PlaceholderContext);
}

export { PlaceholderProvider, usePlaceholderCtx };

