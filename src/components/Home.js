import React from 'react';
import Footer from './Footer';

import Carousel from './Carousel';
import ManualCarousel from './ManualCarousel';

const Home = () => {
  return (
    <div>
      {/* <img
        src="https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&w=600"
        width="100%"
        height="600px"
        alt="image"
      /> */}
      {/* <ManualCarousel /> */}
      <Carousel />
      <Footer />
    </div>
    //https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30436.jpg?w=2000
  );
};
export default Home;
