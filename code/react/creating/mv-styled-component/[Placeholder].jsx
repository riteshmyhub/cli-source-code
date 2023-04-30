import React from "react";
import usePlaceholder from "./usePlaceholder";
import PlaceHolderStyle from "./[Placeholder].style";

export default function Placeholder() {
   const { text } = usePlaceholder();
   return (
      <PlaceHolderStyle>
         <div className="card">
            <p>{text}</p>
         </div>
      </PlaceHolderStyle>
   );
}
