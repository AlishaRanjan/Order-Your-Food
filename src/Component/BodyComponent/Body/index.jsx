import {
    StyledBodyContainer,
    StyledSearchContainer,
    StyledresturantContainer,
    StyledFilterDiv,
    StyledFilterBtn,
    StyledSearchInput,
    StyledSearchButton
  } from "./style";
import ResturantCard from "../ResturantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "../ShimmerUI";
  
  const Body = () => {
    const [dispResturantList, setDispResturantList] = useState([]);
    const [filterResturant, setFiltereResturant] = useState([]);
    const [searchData, setSearchData] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const foodListPromise = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const foodList = await foodListPromise.json();
        setDispResturantList(foodList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      };
    
      fetchData();
    }, []);
    
    useEffect(() => {
      setFiltereResturant(dispResturantList);
    }, [dispResturantList]);
     
    const fetchTopRatedResturants = () =>{
      let resturantList = dispResturantList.filter((res)=> res.info.avgRating > 4.0);
      setDispResturantList(resturantList);
    }
    const onSearchHandler = (event) =>{
      event.preventDefault();
      setSearchData(event.target.value);
    }
    const onSearchBtnClicked = () =>{
      let filteredResturantList = dispResturantList.filter((res)=> res.info.name.toLowerCase().includes(searchData.toLowerCase()));
      setFiltereResturant(filteredResturantList);
      setSearchData("");
    }

    return (
        <StyledBodyContainer>
            <StyledFilterDiv>
            <StyledSearchContainer>
              <StyledSearchInput
              placeholder="Enter name to search"
              type="text"
              value={searchData }
              onChange={onSearchHandler}/>
              <StyledSearchButton onClick={onSearchBtnClicked}>Search</StyledSearchButton>
            </StyledSearchContainer>
              <StyledFilterBtn onClick={fetchTopRatedResturants}>
                Top Rated Resturant
              </StyledFilterBtn>
            </StyledFilterDiv>
            <h1>
              Top Resturant in your Area!🍔🥤
            </h1>
            <StyledresturantContainer>
              {
                filterResturant.length === 0? 
                <>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (<ShimmerUI key={num} />))}
                </>
                :<>
                  {filterResturant?.map((restaurant, index) =>{
                    return (<ResturantCard key={index} restaurant={restaurant}/>);
                  })}
                </>
              }
            </StyledresturantContainer>
        </StyledBodyContainer>
    );
  };
  
  export default Body;
  