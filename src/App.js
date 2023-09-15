import React from 'react';

import Header from './Components/Header';
import Welcome from './Components/Welcome'
import Assessments from './Components/Assessments';
import About from './Components/About'
import Help from './Components/Help';
import Register from './Components/Register';
import Footer from './Components/Footer';
import Separator from './Components/Separator';

function App() {
  return (
    <div id='home'>
      <Help />
      <Header />
      <Welcome />
      <div style={{ position: 'relative' }}>
        <Separator />
      </div>
      <Assessments />
      <About />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
