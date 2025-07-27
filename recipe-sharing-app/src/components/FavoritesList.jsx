import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  // Get the full list of recipes and favorite IDs from the store
    const favorites = useRecipeStore(state =>
        state.favorites
        .map(id => state.recipes.find(recipe => recipe.id === id)) // Find matching recipes by ID
        .filter(Boolean) // Filter out any undefined in case a favorite ID doesn't match a recipe
    );

    return (
        <div>
        <h2>My Favorites</h2>

        {favorites.length === 0 ? (
            <p>You haven’t added any favorite recipes yet.</p>
        ) : (
            favorites.map(recipe => (
            <div key={recipe.id} className="recipe-card">
                {/* Link to the recipe details page */}
                <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                </Link>
            </div>
            ))
        )}
        </div>
    );
};

export default FavoritesList;
