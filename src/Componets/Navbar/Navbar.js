import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <section id='header'>
                <div className='xys m-auto'>
                    <li id='headerline'></li>
                </div>
                <div className='container'>
                    <div className='row p-2'>
                        <div className='col-md-8 col-sm-8 col-xs-12 header-cccc'>
                            <div className='top-contact d-flex'>
                                <div className='top-inner'>
                                    <a href='tel:9779026425'>+91 (977) 902 6425</a>
                                </div>
                                <div className='top-inner'>
                                    <a href='mailto:rohit.sagar.x03@gmail.com   '>rohit.sagar.x03@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-4 col-xs-12 header-ssss'>
                            <div className='top-soical text-end'>
                                <a target="blank" href='https://twitter.com/'><i class="bi bi-twitter"></i></a>
                                <a target="blank" href='https://www.facebook.com/'><i class="bi bi-facebook"></i></a>
                                <a target="blank" href='https://www.linkedin.com/'><i class="bi bi-linkedin"></i></a>
                                <a target="blank" href='https://www.instagram.com/'><i class="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <nav class="navbar navbar-expand-lg p-3" id='myHeader'>
                        <NavLink className="navbar-brand text-white" to="/">LOGO</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/service">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/blog">Blog</NavLink>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">Blog
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" to="#">Blog 1</a></li>
                                        <li><a className="dropdown-item" to="#">Blog 2</a></li>
                                        <li><a className="dropdown-item" to="#">Blog 3</a></li>
                                    </ul>
                                </li> */}
                                {/* <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                        Pages
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" to="#">Page 1</a></li>
                                        <li><a className="dropdown-item" to="#">Page 2</a></li>
                                        <li><a className="dropdown-item" to="#">Page 3</a></li>
                                    </ul>
                                </li> */}
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                </li>
                            </ul>
                            <div className='header-contact'>
                                <a href='/contact' className='btn'>Contact Now</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}


export default Navbar;
    