import {Component} from "react";
import {Link} from 'react-router-dom';

class Navbar extends Component{
    render()
    {
        return(
            <div className="">
                <nav className="navbar">
                    <Link className=" navbar-brand text-primary " to="/">Radhika</Link>
                    <div className="nav">
                        <Link className="nav-link text-primary fw-bold" to="/About1">About</Link>
                        <Link className="nav-link text-primary fw-bold" to="/Resume1">Resume</Link>
                        <Link className="nav-link text-primary fw-bold" to="/Contactus">Contactus</Link>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navbar;