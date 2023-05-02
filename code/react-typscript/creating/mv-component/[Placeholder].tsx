import usePlaceholder from "./usePlaceholder";

export default function Placeholder(): JSX.Element {
   const { text } = usePlaceholder();
   return (
      <div>
         <p>{text}</p>
      </div>
   );
}
