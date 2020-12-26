import React from 'react';

import IndexLayout from '../layouts';
import { Hero, About, Experiences } from '../sections';

const IndexPage = () => {
    return (
      <IndexLayout>
        <Hero style={{ marginTop: '42px' }}/>
        <About style={{ marginTop: '80px' }}/>
        <Experiences style={{ marginTop: '80px' }}/>
      </IndexLayout>
  );
}

export default IndexPage;