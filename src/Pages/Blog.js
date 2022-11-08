// import { NavLink } from 'react-router-dom';
// import './Blog.css';

// const Blog = () => {
//     return (
//         <>
//             <section className='blog-banner'>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='col-md-12'>
//                             <h1>Our Blogs</h1>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className='pages my-5'>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
//                             <div className='blog-box'>
//                                 <div className='blog-img-box' style={{ overflow: 'hidden' }}>
//                                     <NavLink to='/blog-1' style={{ cursor: 'pointer' }}>
//                                         <img className='img-fluid' src='https://wallpaperaccess.com/full/210908.jpg' alt='services-img' />
//                                     </NavLink>
//                                 </div>
//                                 <div className='blog-content-box'>
//                                     <h5 className='mb-4'>
//                                         <a href='/blog-1'> IT is considered a subset of information </a></h5>
//                                     <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
//                                     <a href='/blog-1' className='more-btn'>Read More</a>
//                                 </div>
//                             </div>
//                         </div> 
//                          <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
//                             <div className='blog-box'>
//                                 <div className='blog-img-box' style={{ overflow: 'hidden' }}>
//                                     <a href='' style={{ cursor: 'pointer' }}>
//                                         <img className='img-fluid' src='https://wallpaperaccess.com/full/186244.jpg' alt='services-img' />
//                                     </a>
//                                 </div>
//                                 <div className='blog-content-box'>
//                                     <h5 className='mb-4'>
//                                         <a href=''>An IC that contains a CPU may also contain memory</a></h5>
//                                     <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
//                                     <a href='' className='more-btn'>Read More</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
//                             <div className='blog-box'>
//                                 <div className='blog-img-box' style={{ overflow: 'hidden' }}>
//                                     <a href='' style={{ cursor: 'pointer' }}>
//                                         <img className='img-fluid' src='https://wallpaperaccess.com/full/1892752.jpg' alt='services-img' />
//                                     </a>
//                                 </div>
//                                 <div className='blog-content-box'>
//                                     <h5 className='mb-4'>
//                                         <a href=''>The application of computers and internet to store</a></h5>
//                                     <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
//                                     <a href='' className='more-btn'>Read More</a>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
//                                 <div className='blog-box'>
//                                     <div className='blog-img-box' style={{ overflow: 'hidden' }}>
//                                         <a href='' style={{ cursor: 'pointer' }}>
//                                             <img className='img-fluid' src='https://w0.peakpx.com/wallpaper/138/244/HD-wallpaper-gray-and-black-laptop-computer-on-surface.jpg' alt='services-img' />
//                                         </a>
//                                     </div>
//                                     <div className='blog-content-box'>
//                                         <h5 className='mb-4'>
//                                             <a href=''>A window is a separate viewing area</a></h5>
//                                         <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
//                                         <a href='' className='more-btn'>Read More</a>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
//                                 <div className='blog-box'>
//                                     <div className='blog-img-box' style={{ overflow: 'hidden' }}>
//                                         <a href='' style={{ cursor: 'pointer' }}>
//                                             <img className='img-fluid' src='https://i.pinimg.com/originals/bd/ff/7c/bdff7c58f3dd21943610d47a2ae0fbdc.jpg' alt='services-img' />
//                                         </a>
//                                     </div>
//                                     <div className='blog-content-box'>
//                                         <h5 className='mb-4'>
//                                             <a href=''>Array processors or vector processors have multiple</a></h5>
//                                         <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
//                                         <a href='' className='more-btn'>Read More</a>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
//                                 <div className='blog-box'>
//                                     <div className='blog-img-box' style={{ overflow: 'hidden' }}>
//                                         <a href='' style={{ cursor: 'pointer' }}>
//                                             <img className='img-fluid' src='https://wallpaperaccess.com/full/4685960.jpg' alt='services-img' />
//                                         </a>
//                                     </div>
//                                     <div className='blog-content-box'>
//                                         <h5 className='mb-4'>
//                                             <a href=''>Engineering techniques & implementation</a></h5>
//                                         <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
//                                         <a href='' className='more-btn'>Read More</a>
//                                     </div>
//                                 </div>
//                             </div>
//                     </div> 
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Blog






















































import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Blog.css';
import Blogdata from './Blogdata';

const Blog = () => {
    const [item, setItem] = useState(Blogdata)
    return (
        <>
            <section className='blog-banner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>Our Blogs</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pages my-5'>
                <div className='container'>
                    <div className='row mb-4'>
                        {
                            item.map((elem) => {
                                const { image, title, desc } = elem;
                                return (
                                    <>
                                        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4'>
                                            <div className='blog-box'>
                                                <div className='blog-img-box' style={{ overflow: 'hidden' }}>
                                                    <NavLink to='/blog-1' style={{ cursor: 'pointer' }}>
                                                        <img className='img-fluid' src={image} alt='services-img' />
                                                    </NavLink>
                                                </div>
                                                <div className='blog-content-box'>
                                                    <h5 className='mb-4'>
                                                        <a href='/blog-1'>{title}</a></h5>
                                                    <p>{desc}</p>
                                                    <a href='/blog-1' className='more-btn'>Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
