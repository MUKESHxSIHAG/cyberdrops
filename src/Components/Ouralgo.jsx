import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Algoumbrella1 from '../assets/images/webp/Algoumbrella1.webp'
import Algoumbrella2 from '../assets/images/webp/Algoumbrella2.webp'
import Algoumbrella3 from '../assets/images/webp/Algoumbrella3.webp'
import Gradient from '../assets/images/svg/Gradient.svg'
const Ouralgo = () => {
  return (
    <>
      <section className='position-relative'>
        <img className='gradient-5' src={Gradient} alt="Gradient" />
        <Container>
          <Row className='mt-150 align-items-center'>
            <Col lg={6} data-aos="fade-left" className='order-last  order-md-first mt-5'>
              <div className='d_flex justify_content-center align_items-center flex-column'>
                <h2 className='fs-48 text-white fw-700 ff-lato line-normal text_center '>Our <span className='fc-primary'>Algo</span></h2>
                <p className='text-white fs-18 fw-400 ff-lato max-528 text_center'>We have perfected our algorithm, which prioritizes a low risk and consistent profit stream without the need for daily micromanagement. While most trading algorithms can’t stand up against a volatile or risky market, our algorithm thrives in those conditions. Early-stage testers have seen a consistent flow of income with minimal ups and downs. Our algorithm has been in the works for YEARS. This has given us the time to rigorously backtest and release any needed hotfixes. As of early March 2022, we have close to a quarter of a million under direct management!</p>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-right" className='order-md-last  order-first mt-5'>
              <div className='d-md-flex justify-content-center align-items-center gap-4'>
                <div className='d-flex justify-content-center align-items-center flex-column'>
                  <img className='w-md-100 w-75' src={Algoumbrella1} alt="" />
                  <img className='mt-4 w-md-100 w-75' src={Algoumbrella2} alt="" />

                </div>
                <div className='d-flex justify_content-center align_items-center'>
                  <img className='w-md-100 w-75 mt-md-0 mt-4' src={Algoumbrella3} alt="" />
                </div>


              </div>
            </Col>
          </Row>
        </Container>
     </section>

    </>
  )
}

export default Ouralgo
