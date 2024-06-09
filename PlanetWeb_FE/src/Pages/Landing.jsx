import React from 'react';
import AboutUs from '../components/AboutUs/ABoubtGird';
import CardList from '../components/Card/CardList';
import CommentList from '../components/Card/CommentList';
import MainComment from '../components/Card/MainComment';

const Landing = () => {
  return (
    <div>
      <AboutUs/>

      <div className="project text-center ">
      <h1 className='display-1'>Our Project</h1>
      <br />
      <h2>Sow Hope, Reap a Greener Tomorrow: Planet Protectors, Nurturing Nature's Legacy</h2>
      <br />
      <CardList/>
      </div>
      <br />
      <div className="comment text-center ">
        <br />
        <h1>Testimonials</h1>
        <CommentList/>
        <MainComment/>
      </div>
    
    </div>
  );
};

export default Landing;
