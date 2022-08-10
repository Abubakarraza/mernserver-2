import React from 'react'
import profile from '../assest/profile2.jpg'
const About = () => {
  return (
    <>

      <div className="container" >
        <div className="row pt-5">
          <div className="col-md-4 col-sm-6">
            <img src={profile} alt="raza" class="img-thumbnail" />
            <h6 className='mt-3'>Work Link</h6>
            <a href="https://github.com/abubakarraza64" style={{textDecoration:'none'}} target='blank'>GitHub</a>
          </div>
          <div className="col-md-6 col-sm-8 pt-5">
            <h2>Muhammad Abubakar Raza</h2>
            <p style={{ color: "#41558C" }}>Web Developer</p>
            <div className="row mt-5 pt-5">
            <h2>About</h2>
              <div className="col-6">
                
                <h5 className='mt-5'>User Id:</h5>
                <h5 className='mt-3'>Name:</h5>
                <h5 className='mt-3'>E-mail:</h5>
                <h5 className='mt-3'>Phone:</h5>
              </div>
              <div className="col-6">
                <h5 className='mt-5' style={{color:"#41558C"}}>3241545151</h5>
                <h5 className='mt-3' style={{color:"#41558C"}}>M Abubakar Raza</h5>
                <h5 className='mt-3' style={{color:"#41558C"}}>abubakarraza64@gmail.com</h5>
                <h5 className='mt-3' style={{color:"#41558C"}}>+92 321-7805899</h5>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <button type="button" class="btn btn-secondary">Edit Profile</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
