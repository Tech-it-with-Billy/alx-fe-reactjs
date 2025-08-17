import React, { useState, useEffect } from "react";
import RecipeList from "../data.json";

function HomePage() {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        setRecipes(RecipeList);
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const results = recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredRecipes(results);
        } else {
        setFilteredRecipes(recipes);
        }
    }, [searchTerm, recipes]);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Recipe Sharing Platform
        </h1>
        <div className="max-w-xl mx-auto mb-8">
            <input
                type="text"
                placeholder="Find recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredRecipes.map((recipe) => (
            <div
                key={recipe.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105"
            >
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">{recipe.title}</h2>
                    <p className="text-gray-600 text-sm">{recipe.summary}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}

export default HomePage;
