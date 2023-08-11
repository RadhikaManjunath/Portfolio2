import Navbar from "../Home/Navbar";
import { Component } from "react";

class Contactus extends Component {
    render() {
        return (
            <div class=" bg-dark">
                <Navbar/>
                <p className="text-center fw-lighter mt-5 text-light ">Feel free to contact me anytime</p>
                <h1 class="text-center fw-bold text-light">Get in Touch</h1>
                <p class="text-center text-success example">______ ___ ______</p>
                <div className="container ">
                    <div className="row">
                        <div className="col-sm-6  text-light ">
                            <h4 class="fw-light text-light  ">Message me</h4>

                            <input type="text" placeholder="Name" class="border-success p-4 text-light bg-dark" ></input>

                            <input type="text" placeholder="Email" class=" p-4 ms-5 border-success text-light bg-dark" ></input>
                            <p></p>
                            <input type="text" placeholder="Subject" class=" p-4 flex border-success bg-dark text-light" id="text" style={{ width: "510px" }}></input>
                            <p>                                   </p>
                            <textarea rows="6" cols="67" placeholder="Message" class="bg-dark border-success text-light"></textarea>
                            <button class="btn btn-lg bg-success text-light mb-5 mt-2 rounded-5"> Send Message</button>

                        </div>

                        <div className="col-md-6 ">

                            <h3 class="text-light">Contact info</h3>
                            <p class="text-light">Always available for frontend work if the right project comes along ,feel free to contact me!</p>
                            <h4 class="fw-bold text-light">Name </h4>
                            <p class="text-light"> Radhika</p>

                            <h4 class="text-light fw-bold">Location</h4>
                            <p class="text-light">Banglore</p>

                            <h4 class=" text-light fw-bold">Call Me</h4>
                            <p class="text-light">91 9901604271</p>

                            <h4 class="fw-bold text-light">Email me</h4>
                            <p class="text-light">radhikamanjunath34@gmail.com</p>
                        </div>

                    </div>
                </div>
            </div>

        )
    };
}
export default Contactus;