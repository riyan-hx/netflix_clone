import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/rowpost';
import { Orginals , Popular, TVseries, Toprated, action } from './url';
import Footer from './components/footer/footer';





function App() {
  return (
     <div>
     <NavBar/>
     <Banner/>
     <RowPost url={Orginals} title='Netflix Orginals'/> 
     <RowPost url={Toprated} title='Top Rated' isSmall/> 
     <RowPost url={TVseries} title='TV Series' isSmall/>
     <RowPost url={Popular} title='Popular Movies' isSmall/> 
     <RowPost url={action} title='Action Movies' isSmall/>
     <Footer/>
      </div>
  );
}

export default App;
