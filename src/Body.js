import Restcard from './Restcard';
import mockData from './utils/mockData';

const Body = ()=>
    {
        return <div className="body">

        <button className="filter-btn" onClick={
            ()=>console.log("Hello")
        }>Search</button>          
          
        <div className="card-container">              
             {mockData.map(
               (restaurant)=> (
                <Restcard data={restaurant} />
               )
                
             )}
             
        </div>
        </div>
    }

    export default Body;