import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import {
  SimpleCard,
  CardHeader,
  Meta,
  CardLabel,
  ContainerButton,
  GenderButton,
  StatusButton,
  CardContent,
} from './styles';

const SemanticCard = (props) => (
  <main>
    <SimpleCard>
      <Image
        src={props.image}
        wrapped
        ui={false}
        alt='Rick and Morty character avatar'
      />
      <Card.Content>
        <CardHeader>
          #{props.id} {props.name}
        </CardHeader>
        <ContainerButton>
          <GenderButton>{props.gender}</GenderButton>
          <StatusButton>{props.status}</StatusButton>
        </ContainerButton>
        <Meta>
          {props.species} | Apparitions: {props.episodes}
        </Meta>
      </Card.Content>
      <CardLabel extra>Origin:</CardLabel>
      <CardContent extra>🌍 {props.origin}</CardContent>
      <CardLabel extra>Last known location:</CardLabel>
      <CardContent extra>📌 {props.location}</CardContent>
      <br />
    </SimpleCard>
  </main>
);

export default SemanticCard;
