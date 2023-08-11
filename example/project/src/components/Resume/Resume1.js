import { Component } from "react";
import Navbar from "../Home/Navbar";

class Resume1 extends Component {
    render() {
        return (

            <div className="bg-dark">
                <Navbar></Navbar>
                <p className="text-light mt-5 text-center">Check out my Resume</p>
                <h2 className="text-success fw-bold mb-2 text-center"> Resume</h2>
                <p className="text-light text-center">____ __ ____</p>
                <hr />
                <div className=" row">
                    <div className="col-md-5 m-3">
                    <h2 className=" text-success  ms-5">Education</h2>                           

                        <div className="hstack   gap-4">
                            <div className="vr  text-light">
                             </div>
                              <div> 
                                
                                <h3 className="text-light"> Computer Application</h3>
                                <p className="text-light">University of Mysore 2019-2022</p>
                                <p className="text-light"> </p>

                                <hr className="text-light"/>

                                <h3 className="text-light">Bachelor Degree</h3>
                                <p className="text-light">University of Mysore 2019-2022</p>
                                <p className="text-light">Arakalagodu Varadarajulu Kanthamma College for women </p>
                                <p className="text-light"> Hassan</p>


                                <hr className="text-light"/>
                                <h3 className="text-light">PU Board</h3>
                                <p className="text-light">University of Mysore 2018-2019</p>
                                <p className="text-light">Government girls PU college Pradhana RC road, </p>
                                <p className="text-light"> Hassan</p>

                                <hr className="text-light"/>
                            
                               </div> 
                            </div>
                        
                    </div>
                    <div className="col-md-5 m-3">
                        <h2 className="text-success  ms-5">Experience</h2>
                        <div className="hstack   gap-4">
                            <div className="vr  text-light">
                             </div>
                             <div>
                                <h4 className="text-light">Fresher with Graduate</h4>
                                <br/>

                                <hr className="text-light"/>
                                <h4 className="text-light">Completed Course MERN Full Stack </h4>
                                <p className="text-light">Mongodb Express React Node.js</p>
                                <p className="text-light">In Ethnus-Codemithra Center </p>
                                <p className="text-light">At Banglore </p>
                                <hr className="text-light"/>                                
                             </div>
                        </div>     

                    </div>
                </div>
                <hr />
                <div>
                    <p className="text-light ms-5">My level of knowledge in some tools</p>
                    <h1 className="text-light ms-5 fw-boldest">My Skills</h1>
                </div>
                     <div class="row">
                        <div class="col-md-5">
                            <div class="w3-light-grey">
                                <span class="ms-5 text-light">HTML/CSS</span>
                                <span class="m-5 text-light">95%</span>

                                    <div class="w3-green" style={{height:"24px",width:"100%"}}>
                                         <progress className="ms-5  bg-success" value="95" width="100%" max="100">95%</progress>
                                    </div>
                            </div><br></br>
                        </div>
                        <div class="col-md-5">
                            <div class="w3-light-grey">
                                <span class="ms-5 text-light">Bootstrap</span>
                                <span class="m-5 text-light">90%</span>
                                
                                    <div class="w3-green" style={{height:"24px",width:"100%"}}>
                                         <progress className="ms-5  bg-success" value="90" width="100%" max="100"></progress>
                                    </div>
                            </div><br></br>
                        </div>

                </div>
                <div class="row">
                        <div class="col-md-5">
                            <div class="w3-light-grey">
                                <span class="ms-5 text-light">javascript</span>
                                <span class="m-5 text-light">80</span>

                                    <div class="w3-green" style={{height:"24px",width:"100%"}}>
                                         <progress className="ms-5  bg-success" value="80" width="100%" max="100">95%</progress>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="w3-light-grey">
                                <span class="ms-5 text-light">React js</span>
                                
                                    <div class="w3-green" style={{height:"24px",width:"100%"}}>
                                         <progress className="ms-5  bg-success" value="90" width="100%" max="100"></progress>
                                    </div>
                            </div><br></br>
                        </div>

                </div>
                <div class="row">
                        <div class="col-md-5">
                            <div class="w3-light-grey">
                                <span class="ms-5 text-light">Express</span>
                                <span class="m-5 text-light">90%</span>

                                    <div class="w3-green" style={{height:"24px",width:"100%"}}>
                                         <progress className="ms-5  bg-success" value="90" width="100%" max="100"></progress>
                                    </div>
                            </div><br></br>
                        </div>
                        <div class="col-md-5">
                            <div class="w3-light-grey">
                                <span class="ms-5 text-light">Node js</span>
                                <span class="m-5 text-light">80%</span>
                                
                                    <div class="w3-green" style={{height:"24px",width:"100%"}}>
                                         <progress className="ms-5  bg-success" value="80" width="100%" max="100"></progress>
                                    </div>
                            </div><br></br>
                        </div>

                </div>
                <div class="row">
                        <div class="col-md-5">
                            <div class="w3-light-grey">
                                <span class="ms-5 text-light">Core java</span>
                                <span class="m-5 text-light">80%</span>

                                    <div class="w3-green" style={{height:"24px",width:"100%"}}>
                                         <progress className="ms-5  bg-success" value="80" width="100%" max="100"></progress>
                                    </div>
                            </div><br></br>
                        </div>
                        <div class="col-md-5">
                            <div class="w3-light-grey">
                                <span class="ms-5 text-light"> Mongodb</span>
                                <span class="m-5 text-light ">90%</span>
                                
                                    <div class="w3-green" style={{height:"24px",width:"100%"}}>
                                         <progress className="ms-5 bg-success" value="90" width="100%" max={100} ></progress>
                                    </div>
                            </div><br></br>
                        </div>
                </div>    
            </div>
        )
    }
}
export default Resume1;
