
const Restcard = (props)=>
    
{
    const {data}=props
  
return <div className="restcard"> 
 <img
 alt="cardimg" 
 className="cardimg" src={data.cloudinaryImageId} />
 <div className="datadiv">
<h3>{data.name}</h3>
<h6>{data.locality}</h6>
<h6>{data.cuisines.join(", ")}</h6>
<h6>{data.avgRating}</h6>
</div>
</div>
}
export default Restcard;