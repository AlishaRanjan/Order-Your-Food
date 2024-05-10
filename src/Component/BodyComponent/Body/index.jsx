import {
    StyledBodyContainer,
    StyledSearchContainer,
    StyledresturantContainer,
    StyledFilterDiv,
    StyledFilterBtn,
    StyledSearchInput,
    StyledSearchButton,
    StyledLink
  } from "./style";
import ResturantCard from "../ResturantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "../ShimmerUI";
import OnYourMindCarousel from "../OnYourMindCarousel";
import TopResturantComponent from "../TopResturantComponent";
import useFetchData from "../../../utils/useFetchData";
  
  const Body = () => {
    const [dispResturantList, setDispResturantList] = useState([]);
    const [filterResturant, setFiltereResturant] = useState([]);
    const [searchData, setSearchData] = useState("");
    console.log("filterResturant", filterResturant);
    const dispRestList = useFetchData();

    useEffect(()=>{
      setDispResturantList(dispRestList);
    },[dispRestList]);
    
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
        <StyledBodyContainer className="p-10">
          <OnYourMindCarousel props={dispResturantList?.data?.cards[0]?.card?.card}/>
          <TopResturantComponent props={dispResturantList?.data?.cards[1]?.card?.card} />
            <StyledFilterDiv>
            <StyledSearchContainer>
              <StyledSearchInput className="text-sm w-300"
              placeholder="Enter name to search"
              type="text"
              value={searchData }
              onChange={onSearchHandler}/>
              <StyledSearchButton className="text-sm" onClick={onSearchBtnClicked}>Search</StyledSearchButton>
            </StyledSearchContainer>
              <StyledFilterBtn className="text-sm" onClick={fetchTopRatedResturants}>
                Top Rated Resturant
              </StyledFilterBtn>
            </StyledFilterDiv >
            <h1 className="text-xl font-serif font-semibold mb-2 mt-10">
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
                      <StyledLink to={"/resMenu/"+restaurant.info.id} key={restaurant.info.id} state={linkData}>
                        <ResturantCard key={restaurant.info.id} restaurant={restaurant}/>
                      </StyledLink>)
                  })}
                </>
              }
            </StyledresturantContainer>
        </StyledBodyContainer>
    );
  };
  
  export default Body;
  