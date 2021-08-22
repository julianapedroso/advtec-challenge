import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
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
  <>
    <SimpleCard>
      <Image src={props.image} wrapped ui={false} />
      <Card.Content>
        <CardHeader>#{props.id} {props.name}</CardHeader>
        <ContainerButton>
          <GenderButton>{props.gender}</GenderButton>
          <StatusButton>{props.status}</StatusButton>
        </ContainerButton>
        <Meta>{props.species} | Apparitions: {props.episodes}</Meta>
      </Card.Content>
      <CardLabel extra>Last known location:</CardLabel>
      <CardContent extra>🌍 {props.location}</CardContent>
      <CardContent><p></p></CardContent>

      <br />
    </SimpleCard>
  </>
);

export default SemanticCard;
