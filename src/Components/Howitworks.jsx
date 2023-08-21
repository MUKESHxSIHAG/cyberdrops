import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Howitworks = () => {
    return (
        <>
            <Container data-aos="fade-down">
                <div className='d-flex justify-content-center align-items-center mt-5 pt-5'>
                    <h2 className='text-white fs-48 ff-lato fw-7000'>How it <span className='fc-primary'>Works</span></h2>
                </div>

                <Row className='justify-content-center align-items-center pb-166 mt-4'>
                    <Col lg={3} sm={6}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='howWorksCard d-flex flex-column justify-content-center my_box align-items-center mt-5'>
                                <div className='circle d-flex justify-content-center align-items-center text-center '>
                                    <h3 className='mb-0 fs-28 ff-lato text-white fw-700'>01</h3>
                                </div>
                                <h4 className='mb-0 ff-lato fs-20 text-white fw-700 mt-4 line-normal'>Mint NFT</h4>
                                <p className='fs-16 ff-lato text-white fw-400 line-normal text-center max-222 mt-3 mb-0'>You must own our NFT to connect to direct management or participate in governance</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='howWorksCard my_box d-flex flex-column justify-content-center align-items-center mt-5'>
                                <div className='circle d-flex justify-content-center align-items-center text-center '>
                                    <h3 className='mb-0 fs-28 ff-lato text-white fw-700 mh-24'>02</h3>
                                </div>
                                <h4 className='mb-0 ff-lato fs-20 text-white fw-700 mt-4 white-space-nowrap line-normal'>Verify NFT Ownership</h4>
                                <p className='fs-16 ff-lato text-white fw-400 line-normal mb-0 text-center max-222 mt-3'>Only Cyber Drops that are have verified are eligible to be connected under direct management
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='howWorksCard my_box d-flex flex-column justify-content-center align-items-center mt-5'>
                                
                                    <div className='circle d-flex justify-content-center align-items-center text-center '>
                                        <h3 className='mb-0 fs-28 ff-lato text-white fw-700 mh-24'>03</h3>
                                    </div>
                                    <h4 className='mb-0 ff-lato fs-20 text-white fw-700 mt-4 white-space-nowrap line-normal'>Link API to your account</h4>
                                    <p className='fs-16 ff-lato text-white fw-400 line-normal text-center max-222 mt-3 mb-0'>Only HODLers that submit their API key and secret will be under direct management</p>
                               
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='d-flex justify-content-center align-items-center text-center'>
                            <div className='howWorksCard my_box d-flex flex-column justify-content-center align-items-center mt-5'>
                                <div className='circle d-flex justify-content-center align-items-center text-center '>
                                    <h3 className='mb-0 fs-28 ff-lato text-white fw-700 mh-24'>04</h3>
                                </div>
                                <h4 className='mb-0 ff-lato fs-20 text-white fw-700 mt-4 line-normal'>Passive Income for life</h4>
                                <p className='fs-16 ff-lato text-white fw-400 line-normal text-center max-222 mb-0 mt-3'>As long as your HODL your Cyber Drop, you will be connected under direct management</p>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Howitworks
