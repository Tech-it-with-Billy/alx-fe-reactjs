import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';

const router = createBrowserRouter([
  { path: '/', element: <RecipeList /> },
  { path: '/add', element: <AddRecipeForm /> },
  { path: '/recipes/:recipeId', element: <RecipeDetails /> },
  { path: '/recipes/:recipeId/edit', element: <EditRecipeForm /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
