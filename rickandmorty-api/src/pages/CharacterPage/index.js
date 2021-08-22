import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, CHARACTER } from '../../services/api';
import SemanticCard from '../../components/SemanticCard';
import { ContainerCard } from './styles';
import Pagination from '../../components/Pagination';
import Header from '../Header';

const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  // const [inputLogin, setInputLogin] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  // const params = useParams();
  // const pageNumber = params.pageNumber ? parseInt(params.pageNumber, 10) : 1;

  // const [state, setState] = useState({
  //   count: undefined,
  //   limit: undefined,
  //   next: '',
  //   previous: '',
  //   start: undefined,
  //   results: [],
  // });

  useEffect(() => {
    getCharactersInformation();
  }, []);

  const getCharactersInformation = () => {
    // const limit = 5;
    setLoading(true);
    axios
      .get(
        `${BASE_URL}/${CHARACTER}`
      )
      .then((res) => {
        setCharacters(res.data.results);
        console.log('personagens:', res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // const hasPrevious = pageNumber > 1;
  // const hasNext = !!state.next;

  // const charactersPerPage = 10;
  // const pagesVisited = charactersPerPage * charactersPerPage;

  // const displayCharacters = characterList.slice(pagesVisited, pagesVisited + charactersPerPage).map((character) => {
  //   return (
  //     <SemanticCard
  //       id={character.id}
  //       image={character.image}
  //       name={character.name}
  //       gender={character.gender}
  //       status={character.status}
  //       species={character.species}
  //       type={character.type}
  //       location={character.location.name}
  //       episodes={character.episode.length}
  //     ></SemanticCard>
  //   );
  // })

  // const indexOfLastCharacter = currentPage * chacaracterPerPage;
  // const indexOfFirtCharacter = indexOfLastCharacter - chacaracterPerPage;
  // const currentPage = characterList.slice(
  //   indexOfFirtCharacter,
  //   indexOfLastCharacter
  // );

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
      <Pagination 
      totalPages={10}/>
      { loading ? <p>Loading...</p> : <ContainerCard>
        {characters.map((character) => {
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
      </ContainerCard> }
      {/* <div>
        <div>showing page #{pageNumber}</div>
        {hasPrevious && (
          <Link to={`/character/page/${pageNumber - 1}`}>Previous</Link>
        )}
        {hasNext && <Link to={`/character/page/${pageNumber + 1}`}>Next</Link>}
      </div> */}
      
    </div>
  );
};

export default CharacterPage;
