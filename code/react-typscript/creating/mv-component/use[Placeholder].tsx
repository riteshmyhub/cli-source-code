import { useEffect, useState } from "react";

export default function usePlaceholder() {
   const [text, setText] = useState<string>("");
   useEffect(() => {
      setText("Placeholder component work!");
      return () => {};
   }, []);

   return { text };
}
