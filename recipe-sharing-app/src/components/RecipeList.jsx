import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

    if (filteredRecipes.length === 0) {
        return <p>No recipes found. Try a different search term.</p>;
    }

    return (
        <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
            <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
            </Link>
            </div>
        ))}
        </div>
    );
};

export default RecipeList;
