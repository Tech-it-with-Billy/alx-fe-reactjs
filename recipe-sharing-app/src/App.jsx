import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Recipe Sharing App</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/add">Add Recipe</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar />
                  <RecipeList />
                </>
              }
            />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
            <Route path="/recipes/:recipeId/edit" element={<EditRecipeForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
