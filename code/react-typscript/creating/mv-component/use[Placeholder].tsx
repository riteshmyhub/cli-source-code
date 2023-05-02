import { useEffect, useState } from "react";
type user = {
   text: string;
};
export default function usePlaceholder() {
   const [hero, setHero] = useState<string | null>(null);
   //1 with optional chaining
   //const [value, setValue] = useState<user | null>(null);

   //2 without optional chaining
   const [value, setValue] = useState<user | null>({} as user);

   useEffect(() => {
      setHero("Placeholder component work!");
      setValue({
         text: "i am iron man",
      });
      return () => {};
   }, []);

   return { hero, value };
}
