import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import OurMissionUmbrella from '../assets/images/webp/OurMissionUmbrella.webp'
import { Link } from 'react-router-dom'
import Gradient from '../assets/images/svg/Gradient.svg'
const Ourmission = () => {
  return (
    <>
      <section className='position-relative'>
        <img className='gradient-2' src={Gradient} alt="Gradient" />
        <img className='gradient-3' src={Gradient} alt="Gradient" />
        <Container>
          <Row className='align-items-center justify-content-center'>
            <Col lg={6} data-aos="fade-right">
              <div className='d-flex justify-content-center align-items-center'>
                <img className='mt-5 w-75' src={OurMissionUmbrella} alt="Card Umbrella" />
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className='d-flex flex-column justify-content-center align_items-center float-end mt-5'>
                <h2 className='text-white fs-48 fw-700 ff-lato text_center'>Our <span className='fc-primary '>Mission</span></h2>
                <p className='text-white mt-3 max-463 text_center'>We understand that one of the biggest concerns for early-stage investors is that it can quickly become stressful, overwhelming, and especially extremely time consuming. It isn’t easy to balance a full time job, family, and an active investment portfolio, especially when just starting out.</p>
                <Link><p className='heroBtn text-white text_center'>Read More</p></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Ourmission
