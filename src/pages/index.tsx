import React from 'react';

import IndexLayout from '../layouts';
import { Hero, About, Experiences, Projects, Contact } from '../sections';

const IndexPage = () => {
    return (
      <IndexLayout>
        <Hero style={{ marginTop: '40px' }}/>
        <About style={{ marginTop: '80px' }}/>
        <Experiences style={{ marginTop: '80px' }}/>
        <Projects style={{ marginTop: '80px' }}/>
        <Contact style={{ marginTop: '80px', paddingBottom: '150px' }}/>
      </IndexLayout>
  );
}

export default IndexPage;