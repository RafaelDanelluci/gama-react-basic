import React, {useState, useEffect} from 'react';

function App(props) {
  return (
    <>
      <input 
        name = "Usuario" 
        id = "usuario" 
        className = "usuarioInput" 
        placeholder = "Usuario" 
      />
      <button type="button">Pesquisar</button>
    </>
  );
}

export default App;
