/**
 * Copyright (c) Nikita Kovaliov, maizy.ru, 2017
 * See LICENSE.txt for details.
 */

import React from 'react';
import { Link } from 'react-router';

function LargeCard(props) {
  return (
    <div className="large-card">
      <div className="card-name">{props.card.get('name')}</div>
      <div className="back">
        <Link to="/">&#x21A9;</Link>
      </div>
    </div>
  );
}

LargeCard.propTypes = {
  card: React.PropTypes.object,
};

export default LargeCard;
