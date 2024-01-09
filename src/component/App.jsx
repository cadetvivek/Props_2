import React from "react";
import Person from "./Person";
import Phone from "./Phone";
import Address from "./Address";

const App = () => {
  const personData = {
    name: "vivek",
    age: 22,
    address: {
      street: 'Village vilay malheila',
      city: 'Agra',
      state: 'UP'
    },
    phone: {
      number: 98765432154
    }
  };

  return (
    <div>
      <Person name={personData.name} age={personData.age}/>
      <Address street={personData.address.street} city={personData.address.city} state={personData.address.state} />
      <Phone number={personData.phone.number} />
    </div>
  );
};

export default App;
