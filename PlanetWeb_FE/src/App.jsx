import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import WelcomePage from './Pages/WelcomePage';
import LandingLayout from './Layout/LandingLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout/>} >
        <Route index element={<Landing />} />
        <Route path="welcome" element={<WelcomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
