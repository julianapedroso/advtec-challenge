import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const SemanticCard = (props) => (
  <Card>
    <Image src={props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span>{props.species} | {props.status}</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="#" />
        {props.location}
      </a>
    </Card.Content>
    <br />
  </Card>
);

export default SemanticCard;
