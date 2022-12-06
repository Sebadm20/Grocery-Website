import { Component} from "react";
import { MenuData } from "./MenuData";

class Navbar extends Component {
    render(){
        return (
            <nav className="NavbarItems"> 
            <h1>Grocery Web<i className="fab fa-react"></i></h1>
            <ul>
                
                <li>
                    <a href="index.html"><i className="fa-solid fa-house-user"></i>Home</a>
                </li>
            </ul>
            </nav>
        )
    }
}

export default Navbar;