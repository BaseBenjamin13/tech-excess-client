import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Monitors from './pages/Monitors';
import MonitorDetail from './pages/MonitorDetail';

import KeyBoards from './pages/KeyBoards';
import KeyBoardDetail from './pages/KeyBoardDetail';

import Mouses from './pages/Mouses';
import HeadPhones from './pages/HeadPhones';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/monitors" element={<Monitors />} />
            <Route path="/monitors/:id" element={<MonitorDetail />} />
            <Route path="/keyboards" element={<KeyBoards />} />
            <Route path="/keyboards/:id" element={<KeyBoardDetail />} />
            <Route path="/mouses" element={<Mouses />} />
            <Route path="/headphones" element={<HeadPhones />} />
        </Routes>
    </div>
  );
}

export default App;
