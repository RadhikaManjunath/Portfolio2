import { Component } from "react";
import {FaFacebook} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "./Navbar";

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state={name:" ",i:0}
        this.makeTimer()
    }
    makeTimer(){
        const arr=['Designer','Learner','Developer'];
        setInterval(()=>{
            this.setState({name: arr[this.state.i]})
            if(this.state.i===arr.length-1)
            {
                this.setState({
                    i:0
                })
            }
            else{
                this.setState({
                    i: this.state.i+1
               })
            }
        },2000);
    }
    render()
    {
        return(
            <div>
                <Navbar></Navbar>
                <div id="c1"> 
                <h1 class="text-center   m-5  " style={{textAlign:"center",color:"green",paddingTop:"150px"}}> 
                <span>R</span>
                <span>A</span>
                <span>D</span>
                <span>H</span>
                <span>I</span>
                <span>K</span>
                <span>A</span>
                </h1>
                <span class="text-center  fs-1 fw-bold"  style={{textAlign:"center",color:"green" ,paddingLeft:"50px",marginLeft:"500px"}}> I am a </span>
                <span class="text-center fs-1 fw-bold "  style={{color:"green",textAlign:"center",paddingBottom:"800px"}}>  {this.state.name}</span>
                <br/>
                </div>

                    <footer className="text-center " style={{paddingTop:"250px"}}>
                        
                    <FaFacebook class="flogo bg-light me-2 center"></FaFacebook>
                    <FaInstagram class="inslogo bg-light me-2 center "></FaInstagram>
                    <FaLinkedin class="linklogo bg-light me-2 center"></FaLinkedin>
                    <FaGithub class="gitlogo bg-light me-2 center"></FaGithub>
                    </footer>
    
            </div>

        )
    }
}
export default Homepage;