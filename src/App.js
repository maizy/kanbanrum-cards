/**
 * Copyright (c) Nikita Kovaliov, maizy.ru, 2017
 * See LICENSE.txt for details.
 */

import React from 'react';

function App(props) {
  return (
      <div>
        {props.children}
      </div>
  );
}

App.propTypes = {
  children: React.PropTypes.element,
};

export default App;
