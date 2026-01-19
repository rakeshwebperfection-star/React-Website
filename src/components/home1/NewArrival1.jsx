import React from 'react'
import { Container } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function NewArrival1() {
  return (
    <section className='new_Arrivel1'>
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="Recent">
                <div className='product_Nav-wrap'>
                    <h2 className='section_Heading'>
                        <span>Hot <span>New Arrival</span> You May Like</span>
                    </h2>
                    <Nav className="flex-row">
                        <Nav.Item><Nav.Link eventKey="Recent">Recent</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Best-Seller">Best Seller</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Top">Top</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="New-Arrivals">New Arrivals</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Top-rating">Top Rating</Nav.Link></Nav.Item>
                    </Nav>
                </div>
                <div className='vd_Products'>
                    <Tab.Content>
                        <Tab.Pane eventKey="Recent">Recent tab content</Tab.Pane>
                        <Tab.Pane eventKey="Best-Seller">Best Seller tab content</Tab.Pane>
                        <Tab.Pane eventKey="Top">Top tab content</Tab.Pane>
                        <Tab.Pane eventKey="New-Arrivals">New Arrivals tab content</Tab.Pane>
                        <Tab.Pane eventKey="Top-rating">Top Rating tab content</Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>
        </Container>
    </section>
  )
}

export default NewArrival1
