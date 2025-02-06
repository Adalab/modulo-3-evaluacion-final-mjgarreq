# Módulo 3: Ejercicio de evaluaión final

Este ejercicio de evalución del **módulo 3** se ha realizado mediante Vite y React. El objetivo era pintar un listado de personajes de Harry Potter realizando una llamada a la API https://hp-api.onrender.com/.

## EJERCICIOS

1. Listado de personajes

Mediante una llamada a la API (mencionada arriba), pintamos en la página principal un listado de los personajes de Harry Potter; de cada personaje aparece una foto, el nombre y la especie.
Además, la API <u>*no*</u> devuelve imagen de muchos perosnajes, por lo que se ha puesto una foto de relleno.

2. Filtrado de personajes

Vemos un input de tipo texto, mediante el cual la usuaria puede hacer una búsqueda por nombre y el listado se va filtrando para mostrar solo los resultado sde personajes que contengan ese nombre. Si no hay resultados, aparece un mensaje ("No hay ningún peronaje con el nombre XXX").

3. Filtrado por casa

Tenemos un select para poder filtrar por casa; por defecto hemos puesto que aparezcan los personajes de la casa Gryffindor, pero se puede filtrar por cualquiera de las otras casas, además de por nombre.

4. Componentes

El mínimo de componentes requerido era: componentes para el filtro de nombre, para el listado, para la tarjeta de cada personaje y para el detalle de cada personaje; en esta ocasión, hemos decidido hacer más componentes para que esté mejor estructurado.

5. Detalle de personajes

Mediante rutas y React Router DOM, al clicar en un personaje de la lista de personajes se muestra el componente de detalle, donde aparece más información del personaje seleccionado.

6. Detalles de calidad

- Tanto el input como el select están dentro de la etiqueta "form".
- Se ha evitado que el formulario refresque la página por defecto.
- Se puede filtrar independientemente de si la usuaria busca en mayúsculas o minúsuclas.
- Si estás en el detalle de un perosnaje y pinchas en el botón de "Volver", si la usuaria había filtrado por campo de texto sigue apareciendo.

## BONUS

1. Mejoras visuales: en el detalle del personaje aparece el escudo de la casa y su respectivo icono si está vivo o muerto; se ha usado grid para mostrar el listado de personajes; el diseño es responsive.
2. URL compartible: si el usuario busca por una URL que no existe, se renderiz el componente NotFound que muestra una imagen y un mensaje de error.
3. Ordenación: el listado de personajes aparece ordenado alfabñeticamente.
4. Más filtros: