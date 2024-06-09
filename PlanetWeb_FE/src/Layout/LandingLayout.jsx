import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';


const LandingLayout = () => {
  return (
    <div>
      <div className="position-fixed top-0 w-100" style={{ zIndex: 1000 }}>
        <NavBar/>
      </div>
      
      <main style={{ paddingTop: '60px' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default LandingLayout;
