import React, { useState } from "react";

// https://reactjs.org/docs/hooks-intro.html
export default function Hooks(props) {
  // Declare a new state variable, which we'll call "name"
  const [name, setName] = useState("ThanhNguyen");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <section>
      <label>Name</label>
      <input
        value={name}
        onChange={handleNameChange}
      />
    </section>
  );
}
