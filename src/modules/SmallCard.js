/**
 * Copyright (c) Nikita Kovaliov, maizy.ru, 2017
 * See LICENSE.txt for details.
 */

import React from 'react';
import { Link } from 'react-router';

function SmallCard(props) {
  return (
    <div className="small-card">
      <Link to={`/card/${props.card.get('id')}`}>{props.card.get('name')}</Link>
    </div>
  );
}

SmallCard.propTypes = {
  // FIXME: immutable map
  card: React.PropTypes.object,
};

export default SmallCard;
