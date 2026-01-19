import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function ProductCatagories() {
  return (
    <section className='product_Categories' style={{ padding: '100px 0px' }}>
        <Container>
            <Row>
                <Col className='text-center'>
                    <h2 class="section_Heading fs-1 fw-bold"><span>Product <span>Catagories</span></span></h2>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ProductCatagories
