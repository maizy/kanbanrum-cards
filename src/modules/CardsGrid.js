/**
 * Copyright (c) Nikita Kovaliov, maizy.ru, 2017
 * See LICENSE.txt for details.
 */

import React from 'react';

import SmallCard from './SmallCard';

function CardsGrid(props) {
  const cards = props.cards.map(card => <SmallCard card={card} key={card.get('id')} />);
  return (
    <div>
      <h1>Cards</h1>
      {cards}
    </div>
  );
}

CardsGrid.propTypes = {
  // FIXME: immutable list
  cards: React.PropTypes.object,
};


export default CardsGrid;
