import axios from "axios";

const handleDeleteRecipe = async (recipeId, navigate) => {
  try {
    await axios.delete(
      `${import.meta.env.VITE_API_URL}/api/recipes/${recipeId}`,
      { withCredentials: true }
    );
    navigate("/");
  } catch (error) {
    if (error.response) {
      console.error(
        "Erreur lors de la suppression de la recette:",
        error.response.data
      );
    }
  }
};

export default handleDeleteRecipe;
