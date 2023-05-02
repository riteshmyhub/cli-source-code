import { useState, useEffect } from "react";

type propsType = {
   text: string;
};
// Placeholder({test}:propsType)
export default function Placeholder(): JSX.Element {
   const [text, setText] = useState<string>("");

   useEffect(() => {
      setText("Placeholder component work!");
      return () => {};
   }, []);

   return (
      <div>
         <p>{text}</p>
      </div>
   );
}
