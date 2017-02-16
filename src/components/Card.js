/**
 * Copyright (c) Nikita Kovaliov, maizy.ru, 2017
 * See LICENSE.txt for details.
 */

import React from 'react';

import Container from '../modules/Container';
import LargeCard from '../modules/LargeCard';
import ErrorAlert from '../modules/ErrorAlert';
import appOpts from '../AppOpts';

class Card extends React.Component {

  constructor() {
    super();
    this.state = {
      hidden: true,
    };

    // prebind
    [
      'handleRotate',
    ].map((f) => (this[f] = this[f].bind(this)));
  }

  handleRotate() {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    const cardId = this.props.params.cardId;
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
}

Card.propTypes = {
  params: React.PropTypes.object,
};

export default Card;
