import {Component} from "react";
import image from "../Images/Photo1.jpg";
import Navbar from "../Home/Navbar";
import {FaFacebook} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


class About1 extends Component{
    render(){
        return(
            <div class="c2 bg-dark">
            <Navbar/>
            <h2 className="text-center fw-bold text-light ">About me</h2>
            <div className="container mx-4">
                <div class="row">
                    <div className="col-sm-4">
                        <img src={image} alt="img" height={500} width={350} ></img> 
                    </div>
                    <div className="col-sm-8 text-light"> 
                    <h4 className=" my-2 fw-light">Who Iam?</h4>
                    <h2 className="fw-bold my-4 text-success fs-1">Iam Radhika</h2>
                    <h2 className="fw-bold my-4 text-success fs-1">A Web Developer and a Learner </h2><br/>
                     <p className="fw-light text-light fs-4">I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.

</p>
                <div className="row">
                <div className="col-md-6">
                    <span className ="fw-bold text-light">Name :</span>
                     <span className ="fw-light text-light"> Radhika</span>
                </div>
                <div className="col-md-6">
                    <span className="fw-bold text-light">Email :</span>
                    <span className ="fw-light text-light">radhikamanjunath@gmail34.com</span>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                    <span className ="fw-bold text-light">Age :</span>
                     <span className ="fw-light text-light"> 21</span>
                </div>
                <div className="col-md-6">
                    <span className="fw-bold text-light">From :</span>
                    <span className ="fw-light text-light">Hassan</span>
                </div>

                <div class="mt-5 ms-5">
                    <button className="btn mb-5 btn-success rounded-5 btn-lg">Download</button>
                <FaFacebook class="flogo mb-5  ms-2 center"></FaFacebook>
                    <FaInstagram class="inslogo mb-5  ms-2 center "></FaInstagram>
                    <FaLinkedin class="linklogo mb-5 ms-2 center"></FaLinkedin>
                    <FaGithub class="gitlogo mb-5  ms-2 center"></FaGithub>
                </div>

                    
                </div>
                    </div>
                </div>
            </div>   
            </div>      
        )
    }
}
export default About1;