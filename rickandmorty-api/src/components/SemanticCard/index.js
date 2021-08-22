import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { SimpleCard, CardHeader, CardSpan } from './styles';

const SemanticCard = (props) => (
  <>
    <SimpleCard>
      <Image src={props.image} wrapped ui={true} />
      <Card.Content>
        <CardHeader>{props.name}</CardHeader>
        <CardSpan>
          <span>
            {props.species} - {props.status}
          </span>
        </CardSpan>
      
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='#' />
          {props.location}
        </a>
      </Card.Content>
      <br />
    </SimpleCard>
  </>
);

export default SemanticCard;
