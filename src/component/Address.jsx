// import React from "react";
// const Address = (props)=>{
//     return(
//         <div>
//             <h3>{Address.street}</h3>
//             <h3>{Address.city}</h3>
//             <h3>{Address.state}</h3>
//         </div>
//     )
// }
// export default Address;

import React from "react";

const Address = (props) => {
  const { street, city, state } = props;

  return (
    <div>
      <h3>address {street}</h3>
      <h3>city {city}</h3>
      <h3>state {state}</h3>
    </div>
  );
};

export default Address;
