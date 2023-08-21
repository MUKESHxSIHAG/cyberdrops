import React, { useState } from 'react'
import { Container, Button} from 'react-bootstrap'
import { Link } from "react-router-dom"
import Logo from '../assets/images/webp/Logo.webp'
import Gradient from '../assets/images/svg/Gradient.svg'
import { CrossIcon, Discord, MenuIcon, Most, Ones, Twitter } from './Icons';
const Cyberdropsnav = () => {
    const [first, setfirst] = useState(true)


    function shownav() {
        setfirst(false)
        document.body.classList.add("overflow-hidden")
    }
    function hidenav() {
        setfirst(true)
        document.body.classList.remove("overflow-hidden")
    }
    return (
        <>
            <section className='position-relative'>
                <img className='gradient-1' src={Gradient} alt="Gradient" />
                <Container>
                    <div className='d-flex justify-content-between py-4 align-items-center' >
                        <div>
                            <img src={Logo} alt="Logo" />
                        </div>

                        <h3 className='position-relative z-3 d-lg-none' onClick={first ? shownav : hidenav}>  {first ? <MenuIcon /> : <CrossIcon />}  </h3>
                        <ul className={first ? 'd-flex align-items-center gap-20 nav_bar pt-2 ps-0' : "d-flex ps-0 gap-20 nav_bar pt-2 show"} >
                            <li className='pt-2'><Link className='mb navHov text-white fs-16 ff-lato fw-400'>Home</Link></li>
                            <li className='pt-2'><Link className='mb navHov text-white fs-16 ff-lato fw-400'>About</Link></li>
                            <li className='pt-2'><Link className='mb navHov text-white fs-16 ff-lato fw-400'>Team</Link></li>
                            <li className='pt-2'><Link className='mb navHov text-white fs-16 ff-lato fw-400'>Roadmap</Link></li>
                            <li className='pt-2'><Link className='mb navHov text-white fs-16 ff-lato fw-400'>Partners</Link></li>
                            <div className='gap-12 d-flex justify-content-center align-items-center'>
                                <li className='pt-2'><Link className='mb ones-hover icon-circle d-flex justify-content-center align-items-center'><Ones /></Link></li>
                                <li className='pt-2'><Link className='mb icon-circle d-flex justify-content-center align-items-center'><Discord /></Link></li>
                                <li className='pt-2'><Link className='mb icon-circle d-flex justify-content-center align-items-center'><Twitter /></Link></li>
                                <li className='pt-2'><Link className='mb icon-circle d-flex justify-content-center align-items-center'><Most /></Link></li>
                            </div>
                            <Button className='navBtn fw-500 ff-lato fs-16'>Connect Wallet</Button>

                        </ul>

                    </div>
                    <div className='timeline'> </div>
                </Container>
            </section>
        </>
    )
}

export default Cyberdropsnav
