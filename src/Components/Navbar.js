import { Component} from "react";
import { MenuData } from "./MenuData";
import "./NavbarStyle.css";

class Navbar extends Component {
    render(){
        return (
            <nav className="NavbarItems"> 
            <h1 className="logo">Grocery Web<i className="fab fa-react"></i></h1>
            <ul className="nav-menu">
                {MenuData.map((item, index)=>{
                    return(
                        <li key={index}>
                    <a href={item.url} className={item.cName}><i className={item.icon}>{item.tittle}</i></a>
                </li>
                    )
                })}
                
            </ul>
            </nav>
        )
    }
}

export default Navbar;