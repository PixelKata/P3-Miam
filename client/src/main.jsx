import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import App from "./App";
import Home from "./pages/Home";
import CreateRecipe from "./pages/CreateRecipe";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserProfil from "./pages/UserProfile";
import PanelAdmin from "./pages/userAdmin/PanelAdmin";
import User from "./pages/User";
import Buffet from "./pages/leBuffet/Buffet";
import TheRecipes from "./pages/TheRecipes";
import RecipesInstruction from "./pages/RecipesInstruction";
import createRecipeLoader from "./services/loader/createRecipeLoader";

import "./styles/main.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/create-recipe",
        element: <CreateRecipe />,
        loader: createRecipeLoader,
      },
      {
        path: "/user-profil",
        element: <UserProfil />,
      },
      {
        path: "/panel-admin",
        element: <PanelAdmin />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/buffet",
        element: <Buffet />,
      },
      {
        path: "/recipes",
        element: <TheRecipes />,
      },
      {
        path: "/recipes-instruction/:id",
        element: <RecipesInstruction />,
        loader: async ({ params }) => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/recipes/${params.id}`
          );
          return response.data;
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
