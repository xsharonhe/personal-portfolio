import React from 'react';

import IndexLayout from '../layouts';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';

const IndexPage = () => (
  <IndexLayout>
    <Hero />
    <About />
  </IndexLayout>
)

export default IndexPage;