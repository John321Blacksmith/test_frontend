import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {FavouritesPage} from './pages/FavouritesPage'
import {Navigation} from './components/Navigation'

// the main component provides  with all the imported functionality

function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/favourites" element={<FavouritesPage />}/>
    </Routes>
    </>
  )
}


export default App;