/**
 * Copyright (c) Nikita Kovaliov, maizy.ru, 2017
 * See LICENSE.txt for details.
 */

import React from 'react';
import { Link } from 'react-router';

class LargeCard extends React.Component {

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
    const content = this.state.hidden
      ? <div className="card-back" onClick={this.handleRotate} />
      : <div className="card-name" onClick={this.handleRotate}>{this.props.card.get('name')}</div>;

    return (
      <div className="large-card">
        {content}
        <div className="back">
          <Link to="/">&#x21A9;</Link>
        </div>
      </div>
    );
  }
}

LargeCard.propTypes = {
  card: React.PropTypes.object,
};

export default LargeCard;
