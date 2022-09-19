import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';
import AboutMe from './AboutMe';
import Interests from './Interests'
import Footer from './Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="business-card">
    <Navbar />
    <SocialLinks />
    <AboutMe />
    <Interests />
    <Footer />
  </div>

);
