import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import Gradient from '../assets/images/svg/Gradient.svg'
import Bg_umbrella4 from '../assets/images/png/Bg_umbrella4.png'
const Faqsection = () => {
  return (
      <>
          <section className='position-relative'>
              <img className='gradient-8' src={Gradient} alt="Gradient" />
              <img className=' faq-bg-umbrella' src={Bg_umbrella4} alt="Bg-umbrella" />
              <Container>
                  <div className='d-flex justify-content-center align-items-center mt-5 pt-3'>
                      <h2 className='fs-48 fw-700 ff-lato text-white'>FAQ<span className='fc-primary'>'s</span></h2>
                  </div>
                  <Row className='justify-content-center align-items-center mt-5 pt-3'>
                      <Col lg={9}>
                          <Accordion defaultActiveKey="0" className='max-967' data-aos="fade-right">
                              <Accordion.Item eventKey="0" className='bg-black max-967'>
                                  <Accordion.Header className='accordions'><h3 className='ff-lato fs-20 fw-500 text-white'>Egestas scelerisque duis quis aliquet. Consectetur?</h3></Accordion.Header>
                                  <Accordion.Body>
                                      <p className='accordions ff-lato fs-16 fw-400 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                          culpa qui officia deserunt mollit anim id est laborum.</p>
                                  </Accordion.Body>
                              </Accordion.Item>

                              <Accordion.Item eventKey="1" className='bg-black mt-4' data-aos="fade-left">
                                  <Accordion.Header className='accordions'><h3 className='ff-lato fs-20 fw-500 text-white'>Egestas scelerisque duis quis aliquet. Consectetur?</h3></Accordion.Header>
                                  <Accordion.Body>
                                      <p className='accordions ff-lato fs-16 fw-400 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                          culpa qui officia deserunt mollit anim id est laborum.</p>
                                  </Accordion.Body>
                              </Accordion.Item>

                              <Accordion.Item eventKey="3" className='bg-black mt-4' data-aos="fade-right">
                                  <Accordion.Header className='accordions'><h3 className='ff-lato fs-20 fw-500 text-white'>Egestas scelerisque duis quis aliquet. Consectetur?</h3></Accordion.Header>
                                  <Accordion.Body>
                                      <p className='accordions ff-lato fs-16 fw-400 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                          culpa qui officia deserunt mollit anim id est laborum.</p>
                                  </Accordion.Body>
                              </Accordion.Item>

                              <Accordion.Item eventKey="4" className='bg-black mt-4' data-aos="fade-left">
                                  <Accordion.Header className='accordions'><h3 className='ff-lato fs-20 fw-500 text-white'>Egestas scelerisque duis quis aliquet. Consectetur?</h3></Accordion.Header>
                                  <Accordion.Body>
                                      <p className='accordions ff-lato fs-16 fw-400 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                          culpa qui officia deserunt mollit anim id est laborum.</p>
                                  </Accordion.Body>
                              </Accordion.Item>

                              <Accordion.Item eventKey="5" className='bg-black mt-4' data-aos="fade-right">
                                  <Accordion.Header className='accordions'><h3 className='ff-lato fs-20 fw-500 text-white'>Egestas scelerisque duis quis aliquet. Consectetur?</h3></Accordion.Header>
                                  <Accordion.Body>
                                      <p className='accordions ff-lato fs-16 fw-400 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                          culpa qui officia deserunt mollit anim id est laborum.</p>
                                  </Accordion.Body>
                              </Accordion.Item>

                          </Accordion>

                      </Col>
                  </Row>

              </Container>
          </section>
      
    </>
  )
}

export default Faqsection
