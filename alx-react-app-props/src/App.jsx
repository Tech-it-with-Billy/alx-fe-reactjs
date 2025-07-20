import WelcomeMessage from './components/WelcomeMessage.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
// import UserProfile from './components/UserProfile.jsx';
import UserContext from './components/UserContext.js';
import ProfilePage from './components/ProfilePage.jsx';
import React from 'react';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const userData = {
    name: "Alice",
    age: 25,
    bio: "Loves hiking and photography"
  };

  return (
    <>
      <Header />
      <WelcomeMessage />
      <MainContent />

      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>

      <Footer />
    </>
  );
}

export default App
