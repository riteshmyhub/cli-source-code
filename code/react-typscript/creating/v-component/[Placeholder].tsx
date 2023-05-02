import { useState, useEffect } from "react";

export default function Placeholder(): JSX.Element {
   const [text, setText] = useState<null | string>(null);

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
