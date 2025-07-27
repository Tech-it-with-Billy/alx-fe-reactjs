import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const favorites = useRecipeStore(state => state.favorites);

    // Get full favorite recipe objects
    const favoriteRecipes = favorites
        .map(id => recipes.find(recipe => recipe.id === id))
        .filter(Boolean);

    // Collect tags from favorite recipes
    const favoriteTags = new Set(
        favoriteRecipes.flatMap(recipe => recipe.tags || [])
    );

    // Recommend recipes that share tags but aren't already favorites
    const recommendedRecipes = recipes
        .filter(recipe => {
        const isFavorite = favorites.includes(recipe.id);
        const hasMatchingTag = (recipe.tags || []).some(tag => favoriteTags.has(tag));
        return !isFavorite && hasMatchingTag;
        })
        .slice(0, 5); // Limit to 5 recommendations

    return (
        <div>
        <h2>Recommended for You</h2>
        {recommendedRecipes.length === 0 ? (
            <p>No recommendations yet. Add some favorites to get suggestions.</p>
        ) : (
            recommendedRecipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
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

export default RecommendationsList;
