import {
  StyledNavBar,
  StyledLogoContainer,
  StyledLogoImg,
  StyledNavItemContainer,
  StyledNavItemUl,
  StyledNavItemli,
} from "./style";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {checkOnline} from "../../../utils/utilsFunctions";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [online, setOnline] = useState(true);

  useEffect(() => {
      const cleanup = checkOnline(setOnline); 
      return () => {
          cleanup();
      };
  }, []);
  console.log(online, "online");

  return (
    <StyledNavBar className="header">
      <StyledLogoContainer className="logo-container">
        <StyledLogoImg
          src={require("../../../assets/img/Your_Food_logo.png")}
          alt="Your Food Logo"
        />
      </StyledLogoContainer>
      <StyledNavItemContainer>
        <StyledNavItemUl>
          <StyledNavItemli>
            <Link to="/">Home</Link>
          </StyledNavItemli>
          <StyledNavItemli>
            <Link to="/about">About Us</Link>
          </StyledNavItemli>
          <StyledNavItemli>
            <Link to="/contact">Contact Us</Link>
          </StyledNavItemli>
          <StyledNavItemli>Cart</StyledNavItemli>
          <StyledNavItemli
            onClick={() => {
              setLoggedIn((prevState) => !prevState);
            }}
          >
            {loggedIn ? "Login" : "LogOut"}
            {online?  "✅": "🛑"}
          </StyledNavItemli>
        </StyledNavItemUl>
      </StyledNavItemContainer>
    </StyledNavBar>
  );
};

export default Header;
