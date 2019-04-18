import React from 'react';
import logoReact from '../assets/react.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>powered by</p>
        <img src={logoReact} className="logo logo--react" alt="react logo"></img>
      </div>
    </footer>
  )
}
