import { useState } from 'react'
import React from 'react'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddRecipeForm />
      <RecipeList />
      <h2>Recipe Sharing App</h2>
      <p>Share your favorite recipes with the world!</p>
      <p>Click the button to increment the count:</p>
    </>
  )
}

export default App
      