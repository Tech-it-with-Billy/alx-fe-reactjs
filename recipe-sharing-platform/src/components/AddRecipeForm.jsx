import React, { useState } from "react";

function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState(""); // renamed
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        const newErrors = {};
        if (!title.trim()) newErrors.title = "Title is required.";
        if (!ingredients.trim() || ingredients.split(",").length < 2)
            newErrors.ingredients = "Enter at least two ingredients, separated by commas.";
        if (!steps.trim()) newErrors.steps = "Steps are required.";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const newRecipe = {
                title: title.trim(),
                ingredients: ingredients.split(",").map((i) => i.trim()),
                steps: steps.split("\n").map((i) => i.trim()),
            };

            console.log("New Recipe:", newRecipe);

            setTitle("");
            setIngredients("");
            setSteps("");
            alert("Recipe added successfully!");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-start p-6 bg-gray-50">
            <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white rounded-xl shadow-md p-6 space-y-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add New Recipe</h1>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.title ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"
                        }`}
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Ingredients (Separate using commas)</label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        rows={4}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.ingredients ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"
                        }`}
                        placeholder="e.g., spaghetti, eggs, bacon"
                    />
                    {errors.ingredients && (
                        <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Preparation Steps (one per line)
                    </label>
                    <textarea
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        rows={6}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.steps ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"
                        }`}
                        placeholder="e.g., Boil water, Cook pasta, Fry bacon"
                    />
                    {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300"
                    >
                    Add Recipe
                </button>
            </form>
        </div>
    );
}

export default AddRecipeForm;
