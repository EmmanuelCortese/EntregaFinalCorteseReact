import React from 'react';
import NavBar from './componentes/NavBar/Navbar';
import ItemListContainer from './componentes/ItemListaContainer/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <h1>¡Bienvenido!</h1>
      <p>Contamos con amplia variedad de productos para que pueda conocernos.</p>
      <ItemListContainer greeting="Hola Mundoooo"/>
    </>
  );
}

export default App;
