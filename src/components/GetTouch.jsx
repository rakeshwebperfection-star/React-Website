import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function GetTouch() {
  return (
    <section className='get-touch-wrapper'>
        <Container>
            <Row>
                <Col md={10} lg={7}>
                    <h4 className='numbered-heading fs-4 mb-3'>What’s Next?</h4>
                    <h2 className='display-2 fw-bold'>Get In Touch</h2>
                    <p className='my-3'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                    <a href='#' className='btn-primary d-block mt-5'>Say Hello</a>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default GetTouch
