import React from 'react';
import {StyleTopResturantCardContainer, StyledTopRestHeader,StyledTopRestHeaderText} from './style';
import {
  StyledOYMCContainer,
  StyledOYMCHeader,
  StyledOYMCBody,
  StyledOYMCText,
  StyledOYMCRightDiv,
  StyledOYMCLeftDiv,
  StyledOYMCBodyWrapper,
  StyledTopRestBody,
  StyledTopRestName,
  StyledTopRestDetail,
  StyleTopRestAvgRating,
  StyledTopRestAreaName,
  StyleTopRestCostForTwo
} from "./../OnYourMindCarousel/style";
import {Link} from 'react-router-dom';
import ShimmerUI from '../ShimmerUI';

const TopResturantEachComponent =({props})=> {
  return (
    <StyleTopResturantCardContainer className='rounded'>
        <StyledTopRestHeader className='rounded' imageUrl={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props?.info?.cloudinaryImageId}`}>
            <StyledTopRestHeaderText>
             {props?.info?.aggregatedDiscountInfoV3?.header} {props?.info?.aggregatedDiscountInfoV3?.subHeader}
            </StyledTopRestHeaderText>
        </StyledTopRestHeader>
        <StyledTopRestBody>
            <StyledTopRestName className='font-bold text-xl'>{props?.info?.name}</StyledTopRestName>
            <StyledTopRestDetail className='text-neutral-500'> 
                <StyleTopRestAvgRating>
                {props?.info?.avgRatingString}⭐️ . {props?.info?.sla?.slaString}
                </StyleTopRestAvgRating>
            </StyledTopRestDetail>
            <StyledTopRestAreaName className='text-neutral-500'>
                {props?.info?.areaName}
            </StyledTopRestAreaName>
            <StyleTopRestCostForTwo className='text-neutral-500'>
                {props?.info?.costForTwo}
            </StyleTopRestCostForTwo>
        </StyledTopRestBody>
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
    <StyledOYMCContainer className='mt-6'>
      <StyledOYMCHeader>
        <StyledOYMCText className="text-xl font-serif font-semibold mb-2">
            {props?.header?.title} 🤔
        </StyledOYMCText>
        </StyledOYMCHeader>
        {
          props === undefined ?
          <div className="flex">
           {[1, 2, 3, 4].map((num) => ( <ShimmerUI key={num}/>))}
          </div>
        :
      <StyledOYMCBodyWrapper className="gap-x-2">
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
        </StyledOYMCBodyWrapper>}
    </StyledOYMCContainer>
  );
};

export default TopResturantComponent;