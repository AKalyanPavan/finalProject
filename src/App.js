import HomePage from './components/homePage.js'
import SignupPage from './components/signupPage.js'
import React, { useState } from 'react';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const changePage = (page) => {
    setCurrentPage(page)
  }
  return (
    <div className="App">
      {(currentPage == 'home') ? 
        <HomePage changePage={changePage}/> :
        <SignupPage changePage={changePage}/>
      }
    </div>
  );
}

export default App;
