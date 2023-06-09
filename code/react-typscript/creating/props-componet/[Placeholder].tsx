type PlaceholderProps = {
   title?: string;
   color?: "light" | "dark";
   styles?: React.CSSProperties;
   handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
   children?: React.ReactNode;
};
export default function Placeholder({ title, color, styles, handleClick, handleChange, children }: PlaceholderProps): JSX.Element {
   return (
      <div style={styles}>
         {color}
         <h1>{title}</h1>
         <button onClick={(event) => handleClick(event, 12)}>button</button>
         <input type="text" onChange={handleChange} />
         <div>{children}</div>
      </div>
   );
}

{
   /* 
 <Placeholder
     title="text"
     color="dark"
     styles={{ padding: "10px" }}
     handleClick={(event, id) => {
        console.log(event, id);
     }}
     handleChange={(e) => {
        console.log(e.target.value);
     }}>
   <p>tempore veniam similique itaque?</p>
 </Placeholder>
 */
}