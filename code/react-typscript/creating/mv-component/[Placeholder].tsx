import usePlaceholder from "./usePlaceholder";

export default function Placeholder(): JSX.Element {
   const { hero, value } = usePlaceholder();
   return (
      <div>
         <p>{hero}</p>
         <p>{value.text}</p>
      </div>
   );
}
