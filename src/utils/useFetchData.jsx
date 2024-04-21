import { useState, useEffect } from 'react';

const useFetchData = () => {
    const [dispResturantList, setDispResturantList] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const foodListPromise = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const foodList = await foodListPromise.json();
                setDispResturantList(foodList);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    }, []);

    return dispResturantList;
};

export default useFetchData;
