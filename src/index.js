import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './containers/pages/searchpage/searchPage';
import PoliticsPage from './containers/pages/politics/politics';
import BusinessPage from './containers/pages/business/business';
import TechnologyPage from './containers/pages/technology/technology';
import TravelsPage from './containers/pages/travels/travels';
import WeatherPage from './containers/pages/weather/weather';
import ReligionPage from './containers/pages/religion/religion';
import HealthPage from './containers/pages/health&fitness/health&fitness';
import MusicPage from './containers/pages/music/music';
import SportsPage from './containers/pages/sports/sports';

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
