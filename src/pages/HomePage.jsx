import { BrowserRouter, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../store/slices/userSlice";
import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import DashboardMain from "../DashboardMain";

const HomePage = () => {
  const dispatch = useDispatch();

  const { isAuth, email } = useAuth();

  const root = ReactDOM.createRoot(document.getElementById("root"));

  return isAuth ? (
    root.render(
      <div>
        <h1>Welcome</h1>
        <button onClick={() => dispatch(removeUser())}>
          Log out from {email}
        </button>

        <React.StrictMode>
          <BrowserRouter>
            <DashboardMain />
          </BrowserRouter>
        </React.StrictMode>
      </div>
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
