import { createContext, useContext, useState } from "react";

type CtxProps = {
   children: React.ReactNode;
};
type CtxType = {
   user: UserType | null;
   setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

type UserType = {
   name: string;
   profession: string;
   age: number;
};
const PlaceholderContext = createContext<CtxType | null>(null);
function PlaceholderProvider({ children }: CtxProps): JSX.Element {
   const [user, setUser] = useState<UserType | null>(null);
   return (
      <PlaceholderContext.Provider value={{ user, setUser }}>
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

/* 
1 how to use in 
   <PlaceholderProvider>
     <ChildComponent/>
   </PlaceholderProvider>

 2  in ChildComponent.jsx  
   const ChildComponent = () => {
      const {user,setUser} = usePlaceholderCtx();
      useEffect(() => {
         user?.setUser({
            name: "alex",
            profession: "developer",
            age: 28,
         });
       return () => {};
      }, []);

      return (
         <div>
            <p>{JSON.stringify(user)}</p>
         </div>
      );
   };
*/
