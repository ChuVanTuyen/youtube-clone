import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Style/GlobalStyle.scss';
import { Feed, Navbar, ChannelDetail, VideoDetail, SearchFeed } from './components';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const light = "App";
  const dark = "App dark";
  return (

    <div className={darkMode ? dark : light}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </div>
  );
}

export default App;
