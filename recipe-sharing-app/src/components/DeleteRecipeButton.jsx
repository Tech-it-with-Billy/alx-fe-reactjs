import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId, redirectTo = "/" }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate();

    const handleDelete = () => {
        const confirmed = window.confirm("Are you sure you want to delete this recipe?");
        if (confirmed) {
        deleteRecipe(recipeId);
        navigate(redirectTo); // Redirect after delete (default to home)
        }
    };

    return (
        <button onClick={handleDelete} style={{ color: "red" }}>
        Delete Recipe
        </button>
    );
};

export default DeleteRecipeButton;
