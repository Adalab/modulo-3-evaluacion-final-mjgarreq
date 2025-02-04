// import '../styles/App.scss';
//import callToApi from "../services/api";
//import ls from "../services/localStorage";

import { useEffect, useState } from "react";
import Header from "./Header";
import callToApi from "../services/api";

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect (() => {
    callToApi().then((data) => {setCharacters(data)})
  }, [])

  return (
    <>
    <Header />
    <h1>Template react</h1>
    <section>
      <h2>Subtítulo</h2>
      {/* <label htmlFor="email">Escribe tu email:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="mari.carmen@gmail.com"
          value={email}
          onChange={handleEmail}
      /> */}
    </section>
    </>
  );
}

export default App;
