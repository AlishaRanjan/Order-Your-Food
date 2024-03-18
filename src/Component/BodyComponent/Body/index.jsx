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
import OnYourMindCarousel from "../OnYourMindCarousel";
import TopResturantComponent from "../TopResturantComponent";
import {Link} from 'react-router-dom';
  
  const Body = () => {
    const [dispResturantList, setDispResturantList] = useState([]);
    const [filterResturant, setFiltereResturant] = useState([]);
    const [searchData, setSearchData] = useState("");
    console.log("filterResturant", filterResturant)

    useEffect(() => {
      const fetchData = async () => {
        const foodListPromise = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const foodList = await foodListPromise.json();
        setDispResturantList(foodList);
      };
      
      fetchData();
    }, []);
    
    useEffect(() => {
      if(dispResturantList !== undefined) {
        setFiltereResturant(dispResturantList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("foodList",dispResturantList);
      }else{
        setFiltereResturant([]);
      }
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
    const linkData ={
      "title": "IndividualCard"
    }

    return (
        <StyledBodyContainer>
          <OnYourMindCarousel props={dispResturantList?.data?.cards[0].card.card}/>
          <TopResturantComponent props={dispResturantList?.data?.cards[1].card.card} />
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
              {filterResturant !== undefined &&
                filterResturant.length === 0? 
                <>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (<ShimmerUI key={num} />))}
                </>
                :<>
                  {filterResturant?.map((restaurant) =>{
                    return (
                      <Link to={"/resMenu/"+restaurant.info.id} key={restaurant.info.id} state={linkData}>
                        <ResturantCard key={restaurant.info.id} restaurant={restaurant}/>
                      </Link>)
                  })}
                </>
              }
            </StyledresturantContainer>
        </StyledBodyContainer>
    );
  };
  
  export default Body;
  