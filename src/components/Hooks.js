import React, { useState } from "react";

// https://reactjs.org/docs/hooks-intro.html
export default function Hooks(props) {
  // Declare a new state variable, which we'll call "name"
  const [name, setName] = useState('Thanh');
  const [surname, setSurname] = useState('Nguyen');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }

  return (
    <div>
      <section>
        <label>Name</label>
        <input
          value={name}
          onChange={handleNameChange}
        />
      </section>
      <section>
        <label>Surname</label>
        <input
          value={surname}
          onChange={handleSurnameChange}
        />
      </section>
    </div>
  );
}
