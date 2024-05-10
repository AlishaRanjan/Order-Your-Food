import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

const RestMenuComponent = () =>{
    const [resInfo, setResInfo] = useState(null);
    const [itemList, setItemList] = useState([]);
    const {resId} = useParams();
    console.log()
    useEffect(()=>{
        const fetchMenu = async() =>{
            const data = await fetch (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
            const menuData = await data.json();
            setResInfo(menuData?.data);
            let item = menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
            // setItemList(item.cards[15]);
            // setItemList(item);
            console.log("itemList menu",item?.cards[0]?.card);
            // setItemList(item?.cards[1]?.card?.card?.itemCards || item?.cards[4]?.card?.card?.itemCards);
        }
        fetchMenu() ;
        console.log("itemList1",itemList.cards[0]?.card?.card?.card['@type']);
    }, [resId]);
    
    if (resInfo === null) {
        return <h1>Loading</h1>;
    }
    // endswith('NestedItemCategory')
    console.log("itemList2",itemList[0]?.card?.card);
    return (
        <>
              <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
              <h3>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
              <h2>{resInfo?.cards[2]?.card?.card?.info?.cuisines}</h2>
              <h2>Menu</h2>
              <div>
                {itemList?.map((item, index)=>{
                    return (
                        <>
                        {itemList[index]?.card?.card}
                        </>
                        // <li key={index}>{item.card?.info?.name} - Rs.{item?.card?.info?.price/100}</li>
                    );
                })}
              </div>
            </>
      );
};

export default RestMenuComponent;