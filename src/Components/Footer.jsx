import React from 'react'
import { Container } from 'react-bootstrap'
import Footerlogo from '../assets/images/webp/Footerlogo.webp'
import { Discord, Most, Ones, Twitter } from './Icons'
import { Link } from 'react-router-dom'
import Gradient from '../assets/images/svg/Gradient.svg'
const Footer = () => {
    return (
        <>
            <section className='position-relative'>
                <img className='gradient-9' src={Gradient} alt="Gradient" />
                <Container>
                    <div className='d-flex flex-column justify-content-center align-items-center mt-150 '>
                        <img className='mt-3' src={Footerlogo} alt="Footer Logo" data-aos="fade-down-right" />
                        <h2 className='fs-36 fc-primary fw-600 ff-lato mt-1'>Cyber Drops</h2>
                        <p className='fs-16 ff-lato fw-400 text-white max-444 text-center mt-1'>Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet.</p>
                        <div className='gap-4 pb-3' data-aos="fade-down-left">
                            <Link> <Ones /></Link>
                            <Link className='ms-3'><Discord /></Link>
                            <Link className='ms-1'><Twitter /></Link>
                            <Link className='ms-1'><Most /></Link>
                        </div>
                    </div>
                </Container>
                <div className='footerLine'></div>
                <p className='text-center text-white ff-lato fs-16 fw-400 opacity1 mt-3 pb-3 mb-0'>Copyright By 2022</p>
           </section>

        </>
    )
}

export default Footer
