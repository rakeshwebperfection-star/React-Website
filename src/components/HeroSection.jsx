import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function HeroSection() {
  return (
    <section className='hero-section'>
      <Container>
        <Row>
            <Col>
                <div className='hero-info'>
                    <span data-aos="fade-up" data-aos-duration="500">Hi, my name is</span>
                    <h1 data-aos="fade-up" data-aos-duration="1000"><span>Brittany Chiang.</span> <br /> I build things for the web.</h1>
                    <p data-aos="fade-up" data-aos-duration="1500">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
                    <a href='#' className='btn-primary' data-aos="zoom-in" data-aos-duration="2000">Check out my course!</a>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection
