import React from "react";
import {
  StyledCardWrapper,
  StyledH3Tag,
  StyledResturantImg,
  StyledDetailContainer,
  StyledRating,
  StyledEta,
} from "./style";

const ResturantCard = ({restaurant}) => {
  const {name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId} = restaurant.info;
  return (
    <StyledCardWrapper>
      <StyledResturantImg
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="food-logo"
      />
      <StyledH3Tag>{name}</StyledH3Tag>
      <StyledDetailContainer>
        <StyledRating>{avgRating} ⭐️</StyledRating>
        <StyledEta>{sla.deliveryTime}min</StyledEta>
      </StyledDetailContainer>
      <h5>{costForTwo}</h5>
      <div>
        <h4>{cuisines.join(", ")}</h4>
      </div>
    </StyledCardWrapper>
  );
};

export default ResturantCard;
