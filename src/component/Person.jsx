//import React from "react";
// const Person = (Props)=>{
//     return(
//         <div>
//             <h1>{Person.name}</h1>
//             <h2>{Person.age}</h2>
//         </div>
//     )
// }
// export default Person

import React from "react";

const Person = (props) => {
  return (
    <div>
      <h1>name {props.name}</h1>
      <h2>age {props.age}</h2>
    </div>
  );
};

export default Person;
