import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/App';
import reportWebVitals from '../src/reportWebVitals';
import {HashRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from '../src/containers/pages/searchpage/searchPage';
import PoliticsPage from '../src/containers/pages/politics/politics';
import BusinessPage from '../src/containers/pages/business/business';
import TechnologyPage from '../src/containers/pages/technology/technology';
import TravelsPage from '../src/containers/pages/travels/travels';
import WeatherPage from '../src/containers/pages/weather/weather';
import ReligionPage from '../src/containers/pages/religion/religion';
import HealthPage from '../src/containers/pages/health&fitness/health&fitness';
import MusicPage from '../src/containers/pages/music/music';
import SportsPage from '../src/containers/pages/sports/sports';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
             <Router>
              <Routes>
              <Route path='/' element={ <App />} />
              <Route path="/search"  element={<SearchPage />}/>
              <Route path="/sports"  element={<SportsPage />}/>
              <Route path="/politics"  element={<PoliticsPage />}/>
              <Route path="/business"  element={< BusinessPage />}/>
              <Route path="/technology"  element={< TechnologyPage/>}/>
              <Route path="/music&Entertainment"  element={< MusicPage />}/>
              <Route path="/religion"  element={< ReligionPage/>}/>
              <Route path="/travels"  element={< TravelsPage />}/>
              <Route path="/health&fitness"  element={<HealthPage />}/>
              <Route path="/weather"  element={<WeatherPage />}/>
              </Routes>
             </Router>
           </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
