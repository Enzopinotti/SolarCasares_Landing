// App.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxXc7Iz9_rEexpgESUChma97ZQ2N1FuaoPEfMAErQvaj1XS_uAkAQbuC_mWP6xWf-G8/exec";
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const utm_source = queryParams.get('utm_source') || '';
    const utm_medium = queryParams.get('utm_medium') || '';
    const utm_campaign = queryParams.get('utm_campaign') || '';
    const utm_term = queryParams.get('utm_term') || '';
    const utm_content = queryParams.get('utm_content') || '';

    const hasSomeUTM = (
      utm_source || utm_medium || utm_campaign || utm_term || utm_content
    );

    if (hasSomeUTM) {
      // Preparar data como x-www-form-urlencoded
      const params = new URLSearchParams();
      params.append('type', 'utm');
      params.append('utm_source', utm_source);
      params.append('utm_medium', utm_medium);
      params.append('utm_campaign', utm_campaign);
      params.append('utm_term', utm_term);
      params.append('utm_content', utm_content);

      fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
      });
      // De nuevo, no hay .then(...) con parse de respuesta, 
      // porque no-cors no lo permite.
    }
  }, []);

  return (
    <div className="App">
      <Header />
      { location.pathname !== '/thank-you' && <Main /> }
      <Footer />
    </div>
  );
}

export default App;
