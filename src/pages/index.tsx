import React from 'react';

import IndexLayout from '../layouts';
import { Hero, About } from '../sections';

const IndexPage = () => {
    return (
      <IndexLayout>
        <Hero style={{ marginTop: '40px' }}/>
        <About style={{ marginTop: '40px' }}/>
      </IndexLayout>
  );
}

export default IndexPage;