import React from 'react';
import './Services.css'

function Services() {
    return (
        <>
            <section className='ser-banner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>Services</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className='ser-content my-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            {/* <h2>Lorem Ipsum Text</h2> */}
                            <p style={{ fontSize: '15px', fontFamily: '"Barlow", sans-serif', lineHeight: '25px', minHeight: '500px' }}>
                                Coming Soon.....
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;
