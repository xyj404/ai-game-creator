import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Game } from 'src/page/game';

import './App.less';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' Component={Game}>
          <Route path='/game/:id' Component={Game}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
