import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Playbit from '../assets/images/webp/Playbit.webp'
import Twentyfour from '../assets/images/webp/Twentyfour.webp'
import Tradinghive from '../assets/images/webp/Tradinghive.webp'
import Focusgroup from '../assets/images/webp/Focusgroup.webp'
import Gradient from '../assets/images/svg/Gradient.svg'
const Partners = () => {
    return (
        <>
            <section className='position-relative'>
                <img className='gradient-4' src={Gradient} alt="Gradient" />
                <div className='partnersbgimg pb-5'>
                    <div className='d-flex justify-content-center align-items-center text-center mt-5'>
                        <h2 className='text-white fs-48 ff-lato fw-700 text-center txtblk'>Part<span className='fc-primary'>ners</span></h2>
                    </div>
                    <Container data-aos="fade-up">
                        <Row className='mt-150 pb-166'>
                            <div className='d-flex flex-wrap justify-content-center gap-42 '>
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <div className='partnersBorder text-center'>
                                        <img className='py-4 padding-left-right1' src={Playbit} alt="Playbit" />
                                    </div>
                                    <p className='fs-18 fc-black ff-lato fw-700 mt-3'>Playbit</p>
                                </div>
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <div className='partnersBorder text-center'>
                                        <img className='padding-left-right' src={Twentyfour} alt="Twentyfour" />
                                    </div>
                                    <p className='fs-18 fc-black ff-lato fw-700 mt-3'>24 Capital</p>
                                </div>
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <div className='partnersBorder text-center'>
                                        <img className='padding-left-right' src={Tradinghive} alt="Playbit" />
                                    </div>
                                    <p className='fs-18 fc-black ff-lato fw-700 mt-3'>Trading Hive</p>
                                </div>
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <div className='partnersBorder text-center'>
                                        <img className='padding-left-right' src={Focusgroup} alt="Playbit" />
                                    </div>
                                    <p className='fs-18 fc-black ff-lato fw-700 mt-3'>Focus Group Equities</p>
                                </div>
                            </div>

                        </Row>
                    </Container>
                </div>
                <div className=' d-flex justify-content-center align-items-center trans'>
                    <p className='mt-88 fc-primary fs-18 text-center '>For business and collaborations, contact us team@cyberdrops.finance</p>
                </div>
            </section>
        </>
    )
}

export default Partners
