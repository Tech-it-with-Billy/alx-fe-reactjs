import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const foundRecipe = recipesData.find(
        (r) => r.id === parseInt(id, 10)
        );
        setRecipe(foundRecipe);
    }, [id]);

    if (!recipe) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-gray-700">
                <p className="text-lg">Recipe not found.</p>
                <Link to="/" className="mt-4 text-green-600 hover:underline">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="mb-6">
                    <Link to="/" className="text-green-600 hover:underline font-medium">Back to Home</Link>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover"/>
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
                    <p className="text-gray-600 text-lg">{recipe.summary}</p>
                </div>
            </div>
            {recipe.ingredients && (
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ingredients</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            )}

            {recipe.instructions && (
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Instructions</h2>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                        {recipe.instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
}

export default RecipeDetail;
