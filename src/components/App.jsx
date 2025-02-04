// import '../styles/App.scss';
//import callToApi from "../services/api";
//import ls from "../services/localStorage";

function App() {

  /*
  const [starWarsData, setStarWarsData] = useState({});
  const [email, setEmail] = useState(ls.get("email", ""));
  // Llamar a la api con useEffect

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    callToApi().then((response) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
      ls.set("email", email);
      setStarWarsData(response);
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, [email]);

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  */
  return (
    <>
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
