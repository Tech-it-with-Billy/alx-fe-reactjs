import { create } from "zustand";
import { useRecipeStore } from './recipeStore';

const recipeStore = create((set) => ({
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

const SearchBar = () => {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

    return (
        <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
};

export default useRecipeStore;
