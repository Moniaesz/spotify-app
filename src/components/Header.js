import React from 'react';
import logoSpotify from '../assets/spotify.png'

export default function Header() {
  return (
    <header className="header">
      <img className="logo logo--spotify "src={logoSpotify} alt="spotify logo"></img>
      <h1 className="header_heading">Welcome to <span className="spotify-green">Spotify</span> Albums App</h1>
    </header>
  )
}
