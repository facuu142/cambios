import React from "react";
import { HomeIcon } from "../../../Icons/Basic/HomeIcon";
import { NavLink, useLocation } from "react-router-dom";
import { WalletIcon } from "../../../Icons/Basic/WalletIcon";
import "./mainNavbarMobile.css";
import { UsersIcon } from "../../../Icons/Basic/UsersIcon";
import { useAuth } from "../../../Context/AuthProvider";
const MainNavbarMobile = () => {
  const auth = useAuth();
  const idUser = auth.user && auth.user.id;
  const idProfile = auth.user && auth.user.profile.id;
  const location = useLocation();
  const isActiveWallet =
    location.pathname.startsWith(`/wallet/upcoming/${idProfile}`) ||
    location.pathname.startsWith(`/wallet/completed/${idProfile}`);
  return (
    <div className="mobile-navbar-container mobile-only">
      <div className="mobile-header-content">
        <div>
          <NavLink to="/tickets/purchase" className="p2p-link">
            <UsersIcon width="30px" height="30px"/>
          </NavLink>
        </div>
      </div>
      <ul className="mobile-main-content">
        <li>
          <NavLink to="/" >
            <HomeIcon width="24px" height="24px"/>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/wallet/upcoming/${idProfile}`}
            className={isActiveWallet ? "active-link-wallet" : ""}
          >
            <WalletIcon width="24px" height="24px"/>
            <span>Wallet</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainNavbarMobile;
