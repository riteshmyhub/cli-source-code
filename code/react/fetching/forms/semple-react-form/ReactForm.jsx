import React from "react";

export default function ReactForm() {
   const [formValues, setFormValues] = useState({
      username: "",
      name: "",
      lastname: "",
      gender: "",
   });

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormValues({
         ...formValues,
         [name]: value,
      });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formValues);
   };

   return (
      <form onSubmit={handleSubmit}>
         {/* email */}
         <div>
            <label htmlFor="email">email</label>
            <input type="text" onChange={(e) => handleChange(e)} id="email" />
         </div>
         <div>
            <label htmlFor="email">email</label>
            <input type="text" onChange={(e) => handleChange(e)} id="email" />
         </div>
      </form>
   );
}
