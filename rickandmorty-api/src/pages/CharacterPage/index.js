import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, CHARACTER } from '../../services/api';
import SemanticCard from '../../components/SemanticCard';
import { Header } from 'semantic-ui-react';

const CharacterPage = () => {
  const [characterList, setCharacterList] = useState([]);
  const [inputLogin, setInputLogin] = useState('');

  useEffect(() => {
    getCharactersInformation();
  }, []);

  const getCharactersInformation = () => {
    axios
      .get(`${BASE_URL}/${CHARACTER}`)
      .then((res) => {
        setCharacterList(res.data.results);
        console.log('personagens:', res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // const handleInputLogin = (e) => {
  //   setInputLogin(e.target.value);
  // };

  // const filterMembers = () => {
  //   return membersList.filter((user) => {
  //     const login = user.login.toLowerCase();
  //     return login.indexOf(inputLogin.toLowerCase()) > -1;
  //   });
  // };

  return (
    <div>
      <Header as='h1' align='center'>
        Rick N Morty:
      </Header>
      {characterList.map((character) => {
        return (
          <SemanticCard
            id={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
            type={character.type}
            location={character.location.name}
          ></SemanticCard>
        );
      })}
    </div>
  );
};

export default CharacterPage;
