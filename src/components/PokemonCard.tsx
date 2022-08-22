import React from 'react';
import { PokemonProps } from '../interfaces/pokemon-props';
import styled from 'styled-components';

interface PokemonCardProps {
  list: PokemonProps[];
}

const PokemonCardList: React.FC<PokemonCardProps> = ({ list }) => {

  const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
  `;

  const Wrapper = styled.div`
    display: flex;
    border: 1px solid gray;
  `;

  const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
  `;

  const Li = styled.li`
    list-style: none;
    padding: 5px;

    &:first-child {
      border: 1px solid light-grey;
    }
  `;

  const Label = styled.label`
    font-weight: bold;
    font-size: 1rem;
  `;

  if (!list || !list.length) {
    return null;
  }

  const renderList = () => (list.map((pokemon: PokemonProps, index) => (
      <Wrapper>
        <Ul key={index}>
          <Li> <img src={pokemon.sprites.front_default as string} alt="pokemon-thumb" /> </Li>
          <Li> <Label> Name: </Label> {pokemon.name} </Li>
        </Ul>
      </Wrapper>
  )));

  return (
    <Container>
      {renderList()}
    </Container>
  );
}
export default PokemonCardList;