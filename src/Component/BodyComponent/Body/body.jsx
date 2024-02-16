import {
    StyledBodyContainer,
    StyledSearchContainer,
    StyledresturantContainer
  } from "./style";
import ResturantCard from "../ResturantCard/resturantCard";
  
  const Body = () => {
    return (
        <StyledBodyContainer>
            <StyledSearchContainer>Search</StyledSearchContainer>
            <StyledresturantContainer>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
            </StyledresturantContainer>
        </StyledBodyContainer>
    );
  };
  
  export default Body;
  