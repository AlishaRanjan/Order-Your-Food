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
  const {name, costForTwo, avgRating, sla, cloudinaryImageId, areaName} = restaurant.info;
  return (
    <StyledCardWrapper>
      <StyledResturantImg
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="food-logo"
      />
      <StyledH3Tag className="font-bold text-xl">{name}</StyledH3Tag>
      <StyledDetailContainer className="text-neutral-500">
        <StyledRating>{avgRating} ⭐️</StyledRating>
        <StyledEta>{sla.deliveryTime}min</StyledEta>
      </StyledDetailContainer>
      <div className="text-neutral-500">{areaName}</div>
      <h5 className="text-neutral-500">{costForTwo}</h5>
    </StyledCardWrapper>
  );
};

export default ResturantCard;
