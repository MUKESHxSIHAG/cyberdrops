import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Do1 from '../assets/images/webp/Do1.webp'
import Do2 from '../assets/images/webp/Do1.webp'
import Do3 from '../assets/images/webp/Do3.webp'
import Gradient from '../assets/images/svg/Gradient.svg'
import Bg_umbrella1 from '../assets/images/png/Bg_umbrella1.png'
const Whatwedo = () => {
    return (
        <>
            <section className='position-relative'>
                <img className='gradient-6' src={Gradient} alt="Gradient" />
                <img className='wedo-bg-umbrella' src={Bg_umbrella1} alt="Background Umbrella"/>
                <Container className='mt-5 '>
                    <Row className='align-items-center mt-5 pt-5'>
                        <Col lg={6} data-aos="fade-right" className='order-lg-first  order-first'>
                            <div className="d-grid d_flex justify_content-center align_items-center  ">
                                <div className='grid1'>
                                    <img className='w-100' src={Do1} alt="" />
                                </div>
                                <div className='grid2 mt-10'>
                                    <img className='w-100' src={Do2} alt="" />
                                </div>
                                <div className='grid3 mt-10'>
                                    <img className='w-100' src={Do3} alt="" />
                                </div>
                                <div className='grid4 mt-10'>
                                    <img className='w-100' src={Do3} alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} data-aos="fade-left" className=' order-lg-first order-last mt-5'>
                            <div className='d-flex flex-column mx-lg-5 px-lg-4 justify_content-center align_items-center '>
                                <h2 className='fs-48 text-white fw-700 ff-lato line-normal text_center'>What <span className='fc-primary'>we do</span></h2>
                                <p className='text-white fs-18 ff-lato fw-400 max-463 text_center'>1000 Cyber Drops will be dropping on Ethereum in March 2022. Each and every Cyber Drop is uniquely hand crafted. This is just the beginning of our journey. Owning a Cyber Drop will unlock monthly airdrops and future governance rights in addition to our revolutionary algorithm. We strive to always bring innovation and keep BUILDing. Cyber Drops is a community driven project and always will be that way. That’s our promise.</p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Whatwedo
