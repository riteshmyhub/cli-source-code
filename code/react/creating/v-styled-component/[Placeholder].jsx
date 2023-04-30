import React, { useState, useEffect } from "react";
import PlaceHolderStyle from "./[Placeholder].style";

export default function Placeholder() {
   const [text, setText] = useState(null);

   useEffect(() => {
      setText("PlaceHolder component work!");
      return () => {};
   }, []);

   return (
      <PlaceHolderStyle>
         <div className="card">
            <p>{text}</p>
         </div>
      </PlaceHolderStyle>
   );
}
