import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoLocationSharp, IoCallSharp, IoCalendarOutline } from "react-icons/io5";
import { FaHeart, FaTruck, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';

function TopHeader() {
  return (
    <div className='top-navbar-head py-3'>
        <Container>
            <Row className='border-bottom'>
                <Col md={8}>
                    <ul className='horizontal-list'>
                        <li>
                            <IoLocationSharp />
                            <Link href='#'>Store Location</Link>
                        </li>
                        <li>
                            <FaTruck />
                            <Link href='#'>Track Your Order</Link>
                        </li>
                        <li>
                            <IoCallSharp />
                            <Link href='#'>Call Us For Enquiry</Link>
                        </li>
                        <li>
                            <FaHeart />
                            <Link href='#'>Welcome to Radios. We provides Best Electronics item</Link>
                        </li>
                    </ul>
                </Col>
                <Col md={4}>
                    <ul className='horizontal-list justify-content-end'>
                        <li>
                            <IoCalendarOutline />
                            <Link href='#'>Friday, January 16, 2026</Link>
                        </li>
                        <li className='social-list'>
                            <Link href='#'><FaFacebookF /></Link>
                            <Link href='#'><FaTwitter /></Link>
                            <Link href='#'><FaInstagram /></Link>
                            <Link href='#'><FaYoutube /></Link>
                            <Link href='#'><FaPinterest /></Link>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default TopHeader
