import React from "react";
import {
  StyledOYMCContainer,
  StyledOYMCHeader,
  StyledOYMCBody,
  StyledOYMCCard,
  StyledOYMCImg,
  StyledOYMCText,
  StyledOYMCRightDiv,
  StyledOYMCLeftDiv,
  StyledOYMCBodyWrapper
} from "./style";
import ShimmerUI from '../ShimmerUI';

const OnYourMindCarousel = ({ props }) => {
  const box = document.querySelector('#food_card_carousel');
  
  const prevButtonClicked = () =>{
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  }
  const nextButtonClicked = () =>{
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  }

  return (
    <StyledOYMCContainer>
      <StyledOYMCHeader>
        <StyledOYMCText className="text-xl font-serif font-semibold">
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
      <StyledOYMCBody id='food_card_carousel' className="flex overflow-x-auto">
        {props?.imageGridCards?.info.map((info, index) => {
            return (
                <StyledOYMCCard key={index} className="flex-none w-64 mr-4 hover:shadow-xl">
                    <StyledOYMCImg
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${info?.imageId}`}
                    />
                </StyledOYMCCard>
            );
        })}
      </StyledOYMCBody>
        <StyledOYMCRightDiv onClick={nextButtonClicked}>
           {`>`}
        </StyledOYMCRightDiv>
        </StyledOYMCBodyWrapper>
      }
    </StyledOYMCContainer>
  );
};

export default OnYourMindCarousel;
