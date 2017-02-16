/**
 * Copyright (c) Nikita Kovaliov, maizy.ru, 2017
 * See LICENSE.txt for details.
 */

import React from 'react';

import Container from '../modules/Container';
import CardsGrid from '../modules/CardsGrid';
import appOpts from '../AppOpts';

export default function Home() {
  return (
    <div>
      <Container>
        <CardsGrid cards={appOpts.cards} />
      </Container>
    </div>
  );
}
