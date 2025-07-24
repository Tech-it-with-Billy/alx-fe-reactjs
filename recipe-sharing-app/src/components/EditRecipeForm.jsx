import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import { useState } from "react";

const EditRecipeForm = () => {
    const { recipeId } = useParams();
    const navigate = useNavigate();

    const recipe = useRecipeStore(state =>
        state.recipes.find(r => r.id === recipeId)
    );
    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    const [form, setForm] = useState({
        title: recipe?.title || "",
        description: recipe?.description || ""
    });

    if (!recipe) return <p>Recipe not found</p>;

    const handleChange = event =>
        setForm({ ...form, [event.target.name]: event.target.value });

    const handleSubmit = event => {
        event.preventDefault();
        updateRecipe(recipeId, form);
        navigate(`/recipes/${recipeId}`);
    };

    return (
        <form onSubmit={handleSubmit}>
        <h2>Edit Recipe</h2>
        <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            required
        />
        <br />
        <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            required
        />
        <br />
        <button type="submit">Save</button>
        </form>
    );
};

export default EditRecipeForm;
