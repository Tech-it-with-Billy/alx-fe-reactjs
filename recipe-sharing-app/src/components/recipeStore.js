import { create } from "zustand";

export const useRecipeStore = create((set) => ({
    recipes: [],
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

