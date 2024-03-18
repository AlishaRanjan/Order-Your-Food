import React from 'react';
import {StyleTopResturantCardContainer, StyledTopRestHeader,StyledTopRestHeaderText} from './style';
import {
  StyledOYMCContainer,
  StyledOYMCHeader,
  StyledOYMCBody,
  StyledOYMCText,
  StyledOYMCRightDiv,
  StyledOYMCLeftDiv,
  StyledOYMCBodyWrapper
} from "./../OnYourMindCarousel/style";
import {Link} from 'react-router-dom';

const TopResturantEachComponent =({props})=> {
  return (
    <StyleTopResturantCardContainer>
        <StyledTopRestHeader imageUrl={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props?.info?.cloudinaryImageId}`}>
            <StyledTopRestHeaderText>{props?.info?.aggregatedDiscountInfoV3?.header} {props?.info?.aggregatedDiscountInfoV3?.subHeader}</StyledTopRestHeaderText>
        </StyledTopRestHeader>
        <div>
            <div>{props?.info?.name}</div>
            <div>
                <div>
                {props?.info?.avgRatingString}
                </div>
                <div>
                    {props?.info?.sla?.slaString}
                </div>
            </div>
            <div>
                {props?.info?.areaName}
            </div>
            <div>
                {props?.info?.costForTwo}
            </div>
        </div>
      
    </StyleTopResturantCardContainer>
  )
};

const TopResturantComponent = ({ props }) => {
  const box = document.querySelector('#top_rest');
  
  const prevButtonClicked = () =>{
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  }
  const nextButtonClicked = () =>{
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  }
  const linkData ={
    "title": "TopRestaurant"
  }

  return (
    <StyledOYMCContainer>
      <StyledOYMCHeader>
        <StyledOYMCText>
            {props?.header?.title} 🤔
        </StyledOYMCText>
        </StyledOYMCHeader>
      <StyledOYMCBodyWrapper>
        <StyledOYMCLeftDiv onClick={prevButtonClicked}>
        {`<`}
        </StyledOYMCLeftDiv>
      <StyledOYMCBody id='top_rest'>
          {props?.gridElements?.infoWithStyle?.restaurants.map((info)=>{
            return (
              <Link to={"/resMenu/"+ info?.info.id} key={ info?.info.id} state={linkData}>
                <TopResturantEachComponent props={info} />
             </Link>
            );
          })}
      </StyledOYMCBody>
        <StyledOYMCRightDiv onClick={nextButtonClicked}>
           {`>`}
        </StyledOYMCRightDiv>
        </StyledOYMCBodyWrapper>
    </StyledOYMCContainer>
  );
};

export default TopResturantComponent;