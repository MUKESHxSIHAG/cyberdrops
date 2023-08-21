import React from 'react'
import { Container, } from 'react-bootstrap'
import Slider from "react-slick";
import Feedback1 from '../assets/images/webp/Feedback1.webp'
import Feedback2 from '../assets/images/webp/Feedback2.webp'
import Gradient from '../assets/images/svg/Gradient.svg'
import Bg_umbrella2 from '../assets/images/png/Bg_umbrella2.png'
const Meetup = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true, 
                    centerMode: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className='position-relative'>
                <img className='gradient-7' src={Gradient} alt="Gradient" />
                <img className='position-absolute slider-bg-umbrella1' src={Bg_umbrella2} alt="Bg_Umbrella" />
                <img className='meetup-bg-umbrella' src={Bg_umbrella2} alt="Background Umbrella" />

                <Container className='pb-100 ' data-aos="fade-up">
                    <div className='d-flex justify-content-center align-items-center pb-5 mb-3'>
                        <h2 className='ff-lato text-white fs-48 fw-700'>Meet The <span className='fc-primary'>Team</span></h2>
                    </div>
                    <Slider className='ps-80' {...settings}>
                        <div className='d-md-flex align-items-center sliderBg'>
                            <div className=''>
                                <img className='w-100' src={Feedback1} alt="Feedback Boy Image" />
                            </div>
                            <div className='text-center d-flex flex-column justify-content-center align-items-center px-5 cardHeading'>
                                <h3 className='ff-lato fs-24 text-black fw-700 line-normal'>Varun Muthu</h3>
                                <h4 className='ff-lato fs-18 fw-500 text-black line-normal mt-1'>Marketing Director</h4>
                                <h5 className='ff-lato fs-16 fw-400 text-black line-normal mt-3'>https://www.linkedin.com/ <span className='d-block'>in/varunmuthu1</span></h5>
                            </div>
                        </div>
                        <div className='d-md-flex align-items-center sliderBg'>
                            <div className=''>
                                <img className='w-100' src={Feedback2} alt="Feedback Boy Image" />
                            </div>
                            <div className='text-center d-flex flex-column justify-content-center align-items-center px-5 cardHeading'>
                                <h3 className='ff-lato fs-24 text-black fw-700 line-normal'>Shubh Sharma</h3>
                                <h4 className='ff-lato fs-18 fw-500 text-black line-normal mt-1'>Operation Director</h4>
                                <h5 className='ff-lato fs-16 fw-400 text-black line-normal mt-3'>https://www.linkedin.com/ <span className='d-block'>in/shubhsharma01/</span></h5>
                            </div>
                        </div>
                        <div className='d-md-flex align-items-center sliderBg'>
                            <div className=''>
                                <img className='w-100' src={Feedback1} alt="Feedback Boy Image" />
                            </div>
                            <div className='text-center d-flex flex-column justify-content-center align-items-center px-5 cardHeading'>
                                <h3 className='ff-lato fs-24 text-black fw-700 line-normal'>Varun Muthu</h3>
                                <h4 className='ff-lato fs-18 fw-500 text-black line-normal mt-1'>Marketing Director</h4>
                                <h5 className='ff-lato fs-16 fw-400 text-black line-normal mt-3'>https://www.linkedin.com/ <span className='d-block'>in/varunmuthu1</span></h5>
                            </div>
                        </div>


                    </Slider>
                </Container>
            </section>

        </>
    )
}

export default Meetup
