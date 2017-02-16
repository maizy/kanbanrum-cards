/**
 * Copyright (c) Nikita Kovaliov, maizy.ru, 2017
 * See LICENSE.txt for details.
 */

import React from 'react';

import Container from '../modules/Container';
import LargeCard from '../modules/LargeCard';
import ErrorAlert from '../modules/ErrorAlert';
import appOpts from '../AppOpts';

function Card(props) {
  const cardId = props.params.cardId;
  const mayBeCard = appOpts.cards.find(card => card.get('id') === cardId);
  const content = mayBeCard === undefined
    ? <ErrorAlert message="card not found" />
    : <LargeCard card={mayBeCard} />;

  return (
    <Container>
      {content}
    </Container>
  );
}

Card.propTypes = {
  params: React.PropTypes.object,
};

export default Card;
