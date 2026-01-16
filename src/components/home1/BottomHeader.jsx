import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RxHamburgerMenu } from "react-icons/rx";
import Form from 'react-bootstrap/Form';

function BottomHeader() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
        <div className='header__bottom-wrap'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={12}>
                        <div className='header_Humbur'>
                            <div className='hamburger_Icon' onClick={handleShow}><RxHamburgerMenu /></div>
                            <Offcanvas className='header_offcanvas' show={show} onHide={handleClose} placement="end">
                                <Offcanvas.Header closeButton></Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div className='canva_Search'>
                                        <Form.Control type="text" placeholder="Search Keywords" />
                                    </div>
                                    <ul className='canvas_list_Menu'>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Accesories</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Pages</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                        <div className='d-none header_Categories'>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
  );
}

export default BottomHeader
