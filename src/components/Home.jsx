import React from 'react';

import WithAnimation from './HOC/WithAnimation';

//Components
import Hero from './Hero';

const Home = (props) => (
  <Hero />
);

export default WithAnimation(Home, 'SlideIn', 500, 500, 500);
