import React, { createContext, useContext, useState } from "react";

const PlaceholderContext = createContext({ chlidren });
function PlaceholderProvider({ chlidren }) {
   const [user, setUser] = useState({
      name: "alex",
      profession: "developer",
      age: 28,
   });
   return (
      <PlaceholderContext.Provider value={user}>
         {/* chlidren */}
         {chlidren}
         {/* chlidren */}
      </PlaceholderContext.Provider>
   );
}

function usePlaceholder() {
   return useContext(PlaceholderContext);
}

export { PlaceholderProvider, usePlaceholder };

/* 
1 how to use in 
   <PlaceholderProvider>
     <ChildComponent/>
   </PlaceholderProvider>

 2  in ChildComponent.jsx  
   const ChildComponent = () => {
      const user = usePlaceholder();
      return (
         <div>
            <p>{JSON.stringify(user)}</p>
         </div>
      );
   };
*/
