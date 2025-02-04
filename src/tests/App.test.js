/*
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  render(<App />);
  const elements = screen.getAllByText(/learn react/i);
  expect(elements.length).toBe(1);
});


1. Importamos tanto las librerías como los componentes que vamos a usar.
2. test("...") --> declaramos un test; si quisiéramos declarar otro test, lo haríamos de la misma forma; entre comillas ponemos la descripción que queramos de lo que hace el test.
3. render(<App />) --> le indicamos el componente que queremos que nos renderice.
4. const elements = screen.getAllByText(/learn react/i); --> buscamos dentro de App los textos que contengan "learn react" y se guarda una lista de elemntos con este texto.
5. expect(elements.length).toBe(1); --> indicamos que esperamos que la longitud del array "elements" sea 1.
*/