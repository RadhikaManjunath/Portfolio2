import {Component} from "react";

class Navbar extends Component{
    render()
    {
        return(
            <div className="">
                <nav className="navbar">
                    <a className=" navbar-brand text-primary " href="./project">Radhika</a>
                    <div className="nav">
                        <a className="nav-link text-primary fw-bold" href="./About1">About</a>
                        <a className="nav-link text-primary fw-bold" href="./Resume1">Resume</a>
                        <a className="nav-link text-primary fw-bold" href="./Contactus">Contactus</a>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navbar;