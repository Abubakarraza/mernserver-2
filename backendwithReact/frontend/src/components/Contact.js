import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BsFillTelephoneFill, BsEnvelopeFill, BsCalculatorFill, BsFillPersonFill, BsFillHouseDoorFill } from 'react-icons/bs';
export default function Contact() {
    return (
        <>
            <div style={{ marginTop: "20px" }} className="container">
                {/* <div className="row">
                    <div className="col-12" > */}

                <div className="row justify-content-between " style={{ justifyContent: "center" }} >

                    <div className="col-lg-4 col-sm-6 col-12 " style={{ background: "#F8F9F9 ", borderRadius: "6px", margin: "12px" }}>
                        <div className="row">
                            <div className="col-2">
                                <BsFillPersonFill style={{ marginTop: "12px", color: '#2980B9', height: "20px", width: "20px" }} />

                            </div>
                            <div className="col-10" style={{ justifyContent: "flex-start", padding: "5px" }}>
                                <h6>Name</h6>
                                <span>M Abubakar Raza</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12" style={{ background: "#F8F9F9 ", borderRadius: "6px", margin: "12px" }}>
                        <div className="row">
                            <div className="col-2">
                                <BsEnvelopeFill style={{ marginTop: "12px", color: '#2980B9', height: "20px", width: "20px" }} />

                            </div>
                            <div className="col-10" style={{ justifyContent: "flex-start", padding: "5px" }}>
                                <h6>E-mail</h6>
                                <span>abubakarraza64@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12" style={{ background: "#F8F9F9 ", borderRadius: "6px", margin: "12px" }}>
                        <div className="row">
                            <div className="col-2">
                                <BsFillHouseDoorFill style={{ marginTop: "12px", color: '#2980B9', height: "20px", width: "20px" }} />

                            </div>
                            <div className="col-10" style={{ justifyContent: "flex-start", padding: "5px" }}>
                                <h6>Address</h6>
                                <span>Sir Syed Town Faisalabad</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12" style={{ background: "#F8F9F9 ", borderRadius: "6px", margin: "12px" }}>
                        <div className="row">
                            <div className="col-2">
                                <BsCalculatorFill style={{ marginTop: "12px", color: '#2980B9', height: "20px", width: "20px" }} />

                            </div>
                            <div className="col-10" style={{ justifyContent: "flex-start", padding: "5px" }}>
                                <h6>phone</h6>
                                <span>+92 321-7805899</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container border " style={{ marginTop: "30px" }}>
                <form action="">
                    <div className="row " >
                        <div style={{ textAlign: "center", marginTop: '30px' }} className="col-12"><h3>Get in Touch</h3></div>
                    </div>

                    <div className="row" style={{ padding: "20px", justifyContent: "center" }}>
                        <div className="col-lg-4 col-6" >
                            <div class="form-outline">
                                <input type='name' id="typeName" class="form-control" placeholder='Enter Name' required />
                                {/* <label class="form-label" for="typeEmail">Email input</label> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 "   >
                            <div class="form-outline">
                                <input type='email' id="typeEmail" class="form-control" placeholder='Enter Email' required />
                                {/* <label class="form-label" for="typeEmail">Email input</label> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 "  >
                            <div class="form-outline">
                                <input type='number' id="typeNumber" class="form-control" placeholder='Enter phone no' required />
                                {/* <label class="form-label" for="typeEmail">Email input</label> */}
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <form>




                            <div class="form-outline mb-4">
                                <textarea class="form-control" id="form4Example3" rows="4" placeholder='Enter Your Message Here' required></textarea>
                                <label class="form-label" for="form4Example3"></label>
                            </div>


                            {/* <div class="form-check d-flex justify-content-center mb-4">
                            <input class="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                            <label class="form-check-label" for="form4Example4">
                                Send me a copy of this message
                            </label>
                        </div> */}


                            <button type="submit" class="btn btn-primary btn-block mb-4">
                                Send Message
                            </button>
                        </form>

                    </div>
                </form>
            </div>


        </>
    )
}
