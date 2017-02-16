/**
 * Copyright (c) Nikita Kovaliov, maizy.ru, 2017
 * See LICENSE.txt for details.
 */

import React from 'react';

function LargeCard(props) {
  return (
    <div className="large-card">
      {props.card.get('name')}
    </div>
  );
}

LargeCard.propTypes = {
  card: React.PropTypes.object,
};

export default LargeCard;
