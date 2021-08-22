import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, CHARACTER } from '../../services/api';
import SemanticCard from '../../components/SemanticCard';
import { Image } from 'semantic-ui-react';
import { ContainerCard } from './styles';
import Header from '../Header';

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
      <Header />
      <ContainerCard>
        {characterList.map((character) => {
          return (
            <SemanticCard
              id={character.id}
              image={character.image}
              name={character.name}
              gender={character.gender}
              status={character.status}
              species={character.species}
              type={character.type}
              location={character.location.name}
              episodes={character.episode.length}
            ></SemanticCard>
          );
        })}
      </ContainerCard>
    </div>
  );
};

export default CharacterPage;
