import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import RecipeSection from "./user/RecipeSection";
import { getUserFavorite } from "../services/fetchFavorite";
import "../styles/user.css";
import getUserRecipe from "../services/fetchRecipe";

export default function User({ username, description }) {
  const { user } = useAuth();
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [latestRecipes, setLatestRecipes] = useState([]);
  const isAdmin = user && user.role === "admin";

  useEffect(() => {
    if (user) {
      getUserFavorite(user.id).then((data) => {
        setFavoriteRecipes(data);
      });
      getUserRecipe(user.id).then((data) => {
        setLatestRecipes(data);
      });
    }
  }, [user]);

  return (
    <div className="user-page">
      <header className="profile-header">
        <div className="profile-info">
          <Link to="/user-profil">
            {user ? (
              <div className="avatar-name-container">
                <img
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.fullname}`}
                  alt={user.fullname}
                  className="user-avatar"
                />
                <h2 className="user-name">{user.fullname}</h2>
              </div>
            ) : null}
          </Link>
          <div className="profile-details">
            <h1>{username}</h1>
            <p className="profile-description">{description}</p>
          </div>
        </div>
      </header>

      <RecipeSection title="Dernières recettes" recipes={latestRecipes} />
      <RecipeSection title="Mes recettes favorites" recipes={favoriteRecipes} />

      <div className="action-buttons">
        <Link to="/create-recipe">
          <button type="button" className="add-recipe-button">
            Ajouter une nouvelle recette
          </button>
        </Link>

        {isAdmin && (
          <Link to="/panel-admin">
            <button type="button" className="admin-panel-button">
              Panel Admin
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
