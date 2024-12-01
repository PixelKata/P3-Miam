import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../../assets/images/menu.svg";
import Close from "../../assets/images/close.svg";
import { useAuth } from "../../context/authContext";


export default function MenuNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleLogin = () => {
    handleCloseMenu();
    navigate("/login");
  };

  const handleLogout = async () => {
    await logout();
    handleCloseMenu();
    navigate("/");
  };

  const handleMenu = () => {
    setMenuOpen((oldState) => !oldState);
  };

  const handleNavigate = (path) => {
    handleCloseMenu();
    navigate(path);
  };


  return (
    <div className="menu">
      <button type="button" onClick={handleMenu}>
        <img src={Menu} alt="Menu" />
      </button>
      {menuOpen ? (
        <section>
          <button type="button" onClick={handleMenu}>
            <img src={Close} alt="Close" />
          </button>
          {user ? <Link to="/create-recipe" onClick={handleCloseMenu}>Créer une recette</Link> : null}
          <Link to="/recipes" onClick={handleCloseMenu}>Recettes</Link>
          {user ? (
            <>
              <button
                onClick={handleLogout}
                type="button"
                className="logout-button"
              >
                Déconnexion
              </button>
              <Link to="/user" onClick={() => handleNavigate("/user")}>
                <img
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.fullname}`}
                  alt={user.fullname}
                  className="user-avatar"
                />
              </Link>
            </>
          ) : (
            <>
              <Link to="/register" onClick={() => handleNavigate("/register")}>
              Inscription
              </Link>
              <button onClick={handleLogin} type="button">
                Connexion
              </button>
            </>
          )}
        </section>
      ) : null}
    </div>
  );
}
