import React from 'react'
import './Abouttext.css';

function Abouttext() {
  return (
    <>
    <section className='whowe my-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <div className='whowe-content'>
                <h1 className='heading'>WHO WE ARE</h1>
                <div className='who-para-cont pe-5'>
                  <p className='top-para mb-5 '>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p className=' mb-3 '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  <a href='' className='btn mt-3'>Read More</a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
              <div className='whowe-img'>
                <div className='who-img-div ' style={{position:"relative"}} >
                <img src='https://wallpaperaccess.com/full/186244.jpg' className='img-fluid'></img>
                <div className='img-upper-div text-center' >
                  <h1 className='text-white' style={{fontWeight:'700',fontFamily:'"Barlow",sans-serif'}}>2022 </h1>
                  <p className='text-white' style={{letterSpacing:"7px"}}>SINCE</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Abouttext
