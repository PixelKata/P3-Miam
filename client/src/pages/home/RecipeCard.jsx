import { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/home/recipeCard.css";
import { Link } from "react-router-dom";

export default function RecipeCard() {
  const [recipe, setRecipe] = useState([]);

  const fetchData = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/recipes/random`)
      .then((response) => setRecipe(response.data[0]))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleImageClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="Recipe-card">
      <h2>{recipe.title}</h2>
      <section>
        <h3>Description</h3>
        <div />
      </section>
      <div className="card">
        <p>{recipe.description}</p>
        <div className="dishes3">
          <Link to={`/recipes-instruction/${recipe.id}`}>
            <button
              onClick={handleImageClick}
              className="imageRecipeCard"
              type="button"
            >
              <img
                src={`${import.meta.env.VITE_API_URL}/${recipe.image_url}`}
                alt={recipe.title}
                className="imageRecipeCard"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
