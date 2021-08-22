import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../services/characters';
import SemanticCard from '../../components/SemanticCard';
import { ContainerCard } from './styles';
import Pagination from '../../components/Pagination';
import Header from '../Header';
import Loading from '../../components/Loading';

const CharacterPage = () => {
  const [loading, setLoading] = useState(false);
  const [pageState, setPageState] = useState({
    info: {},
    characters: [],
    currentPage: 1,
  });

  useEffect(() => {
    getCharactersInformation();
  }, [pageState.currentPage]);

  const getCharactersInformation = async () => {
    setLoading(true);
    const { info, results } = await getCharacters(pageState.currentPage);
    setPageState({ ...pageState, info, characters: results });
    setLoading(false);
  };

  const onPageChange = (e, page) => {
    const { activePage } = page;
    setPageState({ ...pageState, currentPage: activePage });
  };

  return (
    <div>
      <Header />
      <Pagination
        totalPages={pageState.info.pages}
        onPageChange={onPageChange}
      />
      <Loading
        show={loading}
      />
      <ContainerCard>
        {pageState.characters.map((character) => {
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
