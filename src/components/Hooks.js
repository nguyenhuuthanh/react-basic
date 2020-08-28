import React, { useState, useContext } from "react";
import { ThemeContext, LocaleContext } from '../contexts/GlobalContext';

// https://reactjs.org/docs/hooks-intro.html
export default function Hooks(props) {
  // Get the context
  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);

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
    <div className={theme}>
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
      <section className="languages">
        Languages: {locale}
      </section>
    </div>
  );
}
