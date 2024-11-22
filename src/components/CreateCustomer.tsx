import { useState } from "react";

export default function CreateCustomer() {
   const [fullname, setFullname] = useState("");
   const [nationalId, setNationalId] = useState("");

   function handleClick() {}

   return (
      <div>
         <h2>Create new customer</h2>
         <div className="inputs">
            <div>
               <label>Customer full name</label>
               <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
            </div>
            <div>
               <label>National ID</label>
               <input type="text" value={nationalId} onChange={(e) => setNationalId(e.target.value)} />
            </div>
            <button onClick={handleClick}>Create new customer</button>
         </div>
      </div>
   );
}
