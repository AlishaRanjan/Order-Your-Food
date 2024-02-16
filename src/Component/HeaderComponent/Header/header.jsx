import {
  StyledNavBar,
  StyledLogoContainer,
  StyledLogoImg,
  StyledNavItemContainer,
  StyledNavItemUl,
  StyledNavItemli
} from "./style";

const Header = () => {
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
          <StyledNavItemli>Home</StyledNavItemli>
          <StyledNavItemli>About Us</StyledNavItemli>
          <StyledNavItemli>Contact Us</StyledNavItemli>
          <StyledNavItemli>Cart</StyledNavItemli>
        </StyledNavItemUl>
      </StyledNavItemContainer>
    </StyledNavBar>
  );
};

export default Header;
