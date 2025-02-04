import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/argentBankLogo.webp";
import { logout } from "../redux/actions/auth.actions";

function Header() {
  const isConnected = useSelector((state) => state.auth.token);
  const username = useSelector((state) => state.user.userData.username);

  const dispatch = useDispatch();
  const navigate = useNavigate();

//La fonction logoutHandler() gère la déconnexion//
  const logoutHandler = () => {
    dispatch(logout());
    sessionStorage.clear();
    localStorage.clear();
    navigate("/");
  };

  return (
    <header>
      <h1 className="sr-only">Argent Bank</h1>
      <nav>
        <Link to="/">
          <img src={Logo} alt="Bank Logo" />
        </Link>
        {isConnected ? (
          <div className="connected">
           
            <Link to="/profile">
              <i className="fa-solid fa-2x fa-circle-user" />
              <p>{username}</p>
            </Link>
            <Link to="/" onClick={logoutHandler}>
              <i className="fa-solid fa-arrow-right-from-bracket" />
              <p> Sign out </p>
            </Link>
          </div>
        ) : (
          <div className="not-connected">
            <Link to="/login">
              <i className="fa-solid fa-circle-user"></i>
              <p>Sign In</p>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
