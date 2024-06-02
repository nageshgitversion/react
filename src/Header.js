import { LOGO_URL } from "./utils/constants";

const Header = ()=>{
    return <div className="header">
        <div className = "logo">
          <img className = "logoimg" src={LOGO_URL}/>
        </div>
        <div className="navbar">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}

export default Header;