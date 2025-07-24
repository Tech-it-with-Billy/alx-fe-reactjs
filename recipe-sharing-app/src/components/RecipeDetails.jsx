import { useRecipeStore } from "./recipeStore";
import { useParams, useNavigate } from "react-router-dom";

const RecipeDetails = () => {
    const {recipeId} = useParams();
    const navigate = useNavigate();

    const recipe = useRecipeStore((state) => state.recipe.find((r) => r.id));

    if (!recipe) return  <p>Recipe not found</p>
    const handleEdit = () => {
        navigate(`/recipes/${recipeId}/edit`);
    };

    const handleDelete = () => {
        // Placeholder: hook this into DeleteRecipeButton or global store
        const confirmed = window.confirm("Are you sure you want to delete this recipe?");
        if (confirmed) {
        console.log("Delete logic goes here");
        navigate("/");
        }
    };

    return (
        <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete} style={{ color: "red" }}>Delete</button>
        </div>
    );
};

export default RecipeDetails;