import { createContext, ReactNode } from "react";

interface ContextI {}

export const Context = createContext<ContextI>({});

const ContextProvider = ({ children }: { children: ReactNode }) => {
    
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export default ContextProvider;
