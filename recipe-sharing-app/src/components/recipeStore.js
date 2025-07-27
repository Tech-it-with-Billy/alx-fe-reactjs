import { create } from "zustand";

const useRecipeStore = create((set) => ({
    recipes: [],

    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),
    filteredRecipes: [],
    filterRecipes: () =>
        set((state) => ({
            filteredRecipes: state.recipes.filter(recipe =>
                recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            )
        })),

    setRecipes: (recipes) => set({ recipes }),
    addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
    updateRecipe: (id, data) =>
        set((state) => ({
            recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...data } : r)),
        })),
    deleteRecipe: (id) =>
        set((state) => ({
            recipes: state.recipes.filter((r) => r.id !== id),
        })),
}));

export default useRecipeStore;