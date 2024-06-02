import Restcard from './Restcard';
import resList from './utils/mockData';
import React,{useState,useEffect} from 'react';


const Body = ()=>
    {

        const [restaurantList,setRestaurantList] = useState(resList);

        useEffect(()=>{console.log("This is use effect")},[])

        return <div className="body">

        <button className="filter-btn" onClick={
            ()=>{const filterList = restaurantList.filter((res)=>res.avgRating>4);
                setRestaurantList(filterList);
            }
        }>Search</button>    

        <button onClick={
            ()=>{
                const cityWise = restaurantList.filter(res=>  res.locality.match("Bhavanipuram") );
                console.log(cityWise)
                setRestaurantList(cityWise);

            }
        }>CityWise</button>      
          
        <div className="card-container">              
             {restaurantList.map(
               (restaurant)=> (
                <Restcard data={restaurant} />
               )
                
             )}
             
        </div>
        </div>
    }

    export default Body;