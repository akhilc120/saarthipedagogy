import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import User from './pages/users';
import Album from './pages/albums';
import Photo from './pages/photos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<User/>} />
          <Route path="/idalbum/:userid" element={<Album />} />
          <Route path="/photobyalbumid/:albumid/:userid" element={<Photo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
