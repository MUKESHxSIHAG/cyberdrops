import React from 'react'
import Preloaderimg from '../assets/images/webp/Preloaderimg.webp'
const Preloader = () => {
    return (
        <div>
            <div className='min-vh-100  d-flex justify-content-center align-items-center bg-color position-fixed w-100 top-0 z-3 start-0' id='preloader'>
                <div className='d-flex justify-content-center align-items-center pre_loader'><img className='w-200px' src={Preloaderimg} alt="logo" /></div>
            </div>
        </div>
    )
}

export default Preloader