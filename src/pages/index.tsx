import React from 'react';

import IndexLayout from '../layouts';
import { About } from '../sections/About';

const IndexPage = () => (
  <IndexLayout>
    <h1>Hi people</h1>
    <About />
  </IndexLayout>
)

export default IndexPage;