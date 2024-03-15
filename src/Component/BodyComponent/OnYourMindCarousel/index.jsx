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
        <StyledOYMCText>
            {props?.header?.title} 🤔
        </StyledOYMCText>
        </StyledOYMCHeader>
      <StyledOYMCBodyWrapper>
        <StyledOYMCLeftDiv onClick={prevButtonClicked}>
        {`<`}
        </StyledOYMCLeftDiv>
      <StyledOYMCBody id='food_card_carousel'>
        {props?.imageGridCards?.info.map((info, index) => {
            return (
                <StyledOYMCCard key={index}>
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
    </StyledOYMCContainer>
  );
};

export default OnYourMindCarousel;
