import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HeroUmbrella from '../assets/images/webp/HeroUmbrella.webp'
const Herosection = () => {
    return (
        <>
            <section>
                <Container className='vh-75'>
                    <Row className='align-items-center column-reverse pb-110'>
                        <Col lg={6} data-aos="fade-right" className='order-last d_flex justify_content-center align_items-center flex_column order-lg-first pt-5'>
                            <h1 className='max-411 fs-72 text-white ff-lato fw-800 line-normal text_center line-86'>Welcome to <span className='fc-primary f-800  fs-72 ff-lato'>Cyber Drops</span></h1>
                            <p className='text-white ff-lato fs-18 line-normal fw-400 mt-28 max-547 text_center'>Viverra felis, dui adipiscing ipsum pharetra donec. Pretium, tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit nec curabitur purus. Ullamcorper mattis risus suspendisse pretium tristique.</p>
                            <Link><p className='fw-400 fs-18 text-white line-normal ff-lato heroBtn'>Explore Now</p></Link>
                        </Col>
                        <Col lg={6} data-aos="fade-left" className='order-lg-last order-first pt-5'>
                            <div className='d-flex  justify-content-center'>
                                <img className='mt-5 w-75  pre_loader' src={HeroUmbrella} alt="Umbrella Image" />
                            </div>
                        </Col>
                    </Row>

                </Container>
           </section>
        </>
    )
}

export default Herosection
