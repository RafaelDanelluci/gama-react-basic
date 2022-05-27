import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from 'react-router-dom'

function Home(props) {
  const navigate = useNavigate();
  const [ usuario, setUsuario ] = useState('');
  const [ error, setError ] = useState(false);
  
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${ usuario }/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      
      // eslint-disable-next-line array-callback-return
      repositories.map((repository) => {
        repositoriesName.push(repository.name)
      });
      
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setError(false);
      navigate('/repositories');
    })
    .catch(err => {
      setError(true);
    }) 
  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input className = "usuarioInput" placeholder = "Usuario" value={usuario} onChange={ e => setUsuario(e.target.value) }/>
        <S.Button type="button" onClick={ handlePesquisa }>Pesquisar</S.Button>
      </S.Content>
      { error ? <S.ErrorMsg>Ocorreu um erro. tente novamente</S.ErrorMsg> : '' }
    </S.HomeContainer>
  );
}

export default Home;
