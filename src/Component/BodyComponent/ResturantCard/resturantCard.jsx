import {
  StyledCardWrapper,
  StyledH3Tag,
  StyledResturantImg,
  StyledDetailContainer,
  StyledRating,
  StyledEta,
} from "./style";

const ResturantCard = () => {
  return (
    <StyledCardWrapper>
      <StyledResturantImg
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/x4uyxvihmg8qa3pddkgf"
        alt="food-logo"
      />
      <StyledH3Tag>Meghna Food</StyledH3Tag>
      <StyledDetailContainer>
        <StyledRating>4.4 stars</StyledRating>
        <StyledEta>38min</StyledEta>
      </StyledDetailContainer>
      <h5>400 for Two</h5>
      <h4>Briyani, North Indian, Asian</h4>
    </StyledCardWrapper>
  );
};

export default ResturantCard;
