import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="business-card">
    <Navbar />
    <SocialLinks />
  </div>

);
