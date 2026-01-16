import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function GetTouch() {
  return (
    <section id='contact' className='get-touch-wrapper'>
        <Container>
            <Row>
                <Col md={10} lg={7}>
                    <h4 className='numbered-heading fs-4 mb-3' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">What’s Next?</h4>
                    <h2 className='display-2 fw-bold' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-in-out">Get In Touch</h2>
                    <p className='my-3' data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                    <a href='#' className='btn-primary d-block mt-5' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out">Say Hello</a>

                    <p className='d-none'>Salesforce is another one of the React site examples that was an early adopter. According to Salesforce’s blog, the experience as more of a library than a framework endeared them to the platform. Particularly, because it is presentational and declarative, it could be built into existing projects, conveniently. Salesforce’ use of this library contributed to their building their Lightning Design System, an open-source CSS framework. Now, there is the Lightning Design System for React, which implements variants of LDS React components. Flipboard, a self-declared big fan of React, has used the library for its web app since 2015. The team at Flipboard loves it because of one of its most prominent features: virtual DOM. The project in 2015 was to combine the canvas layout engine into React components to make React Canvas. It also affected changes such as infinite scrolling, as well as ensuring a cleaner codebase including integrating CSS-layout into the Canvas. This shows the range of applications of top React websites. Airbnb utilizes React to provide a seamless and interactive user experience for its vast user base. The company’s website leverages React’s component-based architecture to build complex interfaces efficiently, ensuring that users can easily browse listings, book accommodations, and interact with hosts without any lag or performance issues. React’s ability to handle dynamic content and real-time updates enhances the overall user experience on the platform. Airbnb’s use of React provides a seamless experience for users worldwide. Uber‘s web platform is another prime example of a high-traffic website built with React. The ride-hailing giant uses React to handle dynamic data and real-time updates, ensuring that users can book rides, track their drivers, and receive notifications with minimal delay. React’s ability to manage large-scale applications with high performance makes it an ideal choice for Uber, providing a smooth and responsive user experience.</p>

                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default GetTouch