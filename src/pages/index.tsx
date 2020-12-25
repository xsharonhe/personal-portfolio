import React from 'react';

import IndexLayout from '../layouts';
import { About } from '../sections/About';

const IndexPage = () => {
    return (
      <IndexLayout>
        <About style={{ marginTop: '30px' }}/>
      </IndexLayout>
  );
}

export default IndexPage;