import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { FaStar, FaRegStar } from "react-icons/fa";
import { CgCompressRight } from "react-icons/cg"
import { CiShoppingBasket } from "react-icons/ci";
import { LuHeart } from "react-icons/lu";

function SmartProducts() {
  return (
    <section className='smart_Product new_Arrivel1'>
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="Recent">
                <div className='product_Nav-wrap'>
                    <h2 className='section_Heading'>
                        <span><span>Smartphone</span> / Tablet / Monitor</span>
                    </h2>
                    <Nav className="flex-row product_Nav">
                        <Nav.Item><Nav.Link eventKey="Recent">Nokia</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Best-Seller">Sumsung</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Top">Apple</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="New-Arrivals">Huawei</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Top-rating">xioami 71</Nav.Link></Nav.Item>
                    </Nav>
                </div>
                <div className='vd_Products'>
                    <Tab.Content>
                        <Tab.Pane eventKey="Recent">
                            <Row className="hot-deal__slide align-items-center">
                                <Col lg={4}>
                                    <Row>
                                        <Col lg={6} className="border-end border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_01.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_03.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Skullcandy Dime True In-Ear Earbuds – Golden Red</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-end pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_07.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>        
                                        </Col>
                                        <Col lg={6} className="pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_05.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} className="border rounded-2 p-4">
                                <h2 className='section_Heading fs-3 mb-5'>
                                    <span>5 Star Review</span>
                                </h2>
                                    <div className="deal_slide-item p-3">
                                        <div className="deal_slide-thumb h-100 mb-5">
                                            <a href="#">
                                                <img src="https://html.themexriver.com/radios/assets/img/product/img_19.png" alt="Product Image" loading="lazy" />
                                            </a>
                                        </div>
                                        <div className="mxw_343 mb-4">
                                            <div className="product__progress progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                                            </div>

                                            <div className="ul_li_between">
                                            <span className="product__available">
                                                Available: <span>334</span>
                                            </span>
                                            <span className="product__available">
                                                Stock: <span>180</span>
                                            </span>
                                            </div>
                                        </div>
                                        <div className="deal_slide-content">
                                            <ul className="rating-star">
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaRegStar /></li>
                                                <li><FaRegStar /></li>
                                                <li>(126)</li>
                                            </ul>
                                            <h2 className="product_title my-3">
                                                <a href="#" className="fs-5">Skullcandy Dime True In-Ear Earbuds – Golden Red</a>
                                            </h2>
                                            <h4 className="product__price fs-6">(
                                                <span className="new">$28.52</span>
                                                <span>-</span>
                                                <span className="old">$30.52</span>
                                                )
                                            </h4>
                                        </div>
                                        <ul className="product__action">
                                            <li><a href="#"><CgCompressRight /></a></li>
                                            <li><a href="#"><CiShoppingBasket /></a></li>
                                            <li><a href="#"><LuHeart /></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <Row>
                                        <Col lg={6} className="border-end border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_11.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_13.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Skullcandy Dime True In-Ear Earbuds – Golden Red</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-end pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_16.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>        
                                        </Col>
                                        <Col lg={6} className="pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_14.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Best-Seller">
                            <Row className="hot-deal__slide align-items-center">
                                <Col lg={4}>
                                    <Row>
                                        <Col lg={6} className="border-end border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_04.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_18.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Skullcandy Dime True In-Ear Earbuds – Golden Red</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-end pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_07.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>        
                                        </Col>
                                        <Col lg={6} className="pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_05.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} className="border rounded-2 p-4">
                                <h2 className='section_Heading fs-3 mb-5'>
                                    <span>5 Star Review</span>
                                </h2>
                                    <div className="deal_slide-item p-3">
                                        <div className="deal_slide-thumb h-100 mb-5">
                                            <a href="#">
                                                <img src="https://html.themexriver.com/radios/assets/img/product/img_19.png" alt="Product Image" loading="lazy" />
                                            </a>
                                        </div>
                                        <div className="mxw_343 mb-4">
                                            <div className="product__progress progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                                            </div>

                                            <div className="ul_li_between">
                                            <span className="product__available">
                                                Available: <span>334</span>
                                            </span>
                                            <span className="product__available">
                                                Stock: <span>180</span>
                                            </span>
                                            </div>
                                        </div>
                                        <div className="deal_slide-content">
                                            <ul className="rating-star">
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaRegStar /></li>
                                                <li><FaRegStar /></li>
                                                <li>(126)</li>
                                            </ul>
                                            <h2 className="product_title my-3">
                                                <a href="#" className="fs-5">Skullcandy Dime True In-Ear Earbuds – Golden Red</a>
                                            </h2>
                                            <h4 className="product__price fs-6">(
                                                <span className="new">$28.52</span>
                                                <span>-</span>
                                                <span className="old">$30.52</span>
                                                )
                                            </h4>
                                        </div>
                                        <ul className="product__action">
                                            <li><a href="#"><CgCompressRight /></a></li>
                                            <li><a href="#"><CiShoppingBasket /></a></li>
                                            <li><a href="#"><LuHeart /></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <Row>
                                        <Col lg={6} className="border-end border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_17.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_16.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Skullcandy Dime True In-Ear Earbuds – Golden Red</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-end pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_07.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>        
                                        </Col>
                                        <Col lg={6} className="pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_15.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Top">
                            <Row className="hot-deal__slide align-items-center">
                                <Col lg={4}>
                                    <Row>
                                        <Col lg={6} className="border-end border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_01.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_11.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Skullcandy Dime True In-Ear Earbuds – Golden Red</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-end pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_07.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>        
                                        </Col>
                                        <Col lg={6} className="pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_10.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} className="border rounded-2 p-4">
                                <h2 className='section_Heading fs-3 mb-5'>
                                    <span>5 Star Review</span>
                                </h2>
                                    <div className="deal_slide-item p-3">
                                        <div className="deal_slide-thumb h-100 mb-5">
                                            <a href="#">
                                                <img src="https://html.themexriver.com/radios/assets/img/product/img_19.png" alt="Product Image" loading="lazy" />
                                            </a>
                                        </div>
                                        <div className="mxw_343 mb-4">
                                            <div className="product__progress progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                                            </div>

                                            <div className="ul_li_between">
                                            <span className="product__available">
                                                Available: <span>334</span>
                                            </span>
                                            <span className="product__available">
                                                Stock: <span>180</span>
                                            </span>
                                            </div>
                                        </div>
                                        <div className="deal_slide-content">
                                            <ul className="rating-star">
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaRegStar /></li>
                                                <li><FaRegStar /></li>
                                                <li>(126)</li>
                                            </ul>
                                            <h2 className="product_title my-3">
                                                <a href="#" className="fs-5">Skullcandy Dime True In-Ear Earbuds – Golden Red</a>
                                            </h2>
                                            <h4 className="product__price fs-6">(
                                                <span className="new">$28.52</span>
                                                <span>-</span>
                                                <span className="old">$30.52</span>
                                                )
                                            </h4>
                                        </div>
                                        <ul className="product__action">
                                            <li><a href="#"><CgCompressRight /></a></li>
                                            <li><a href="#"><CiShoppingBasket /></a></li>
                                            <li><a href="#"><LuHeart /></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <Row>
                                        <Col lg={6} className="border-end border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_18.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_15.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Skullcandy Dime True In-Ear Earbuds – Golden Red</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-end pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_17.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>        
                                        </Col>
                                        <Col lg={6} className="pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_16.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="New-Arrivals">
                            <Row className="hot-deal__slide align-items-center">
                                <Col lg={4}>
                                    <Row>
                                        <Col lg={6} className="border-end border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_02.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_14.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Skullcandy Dime True In-Ear Earbuds – Golden Red</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-end pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_17.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>        
                                        </Col>
                                        <Col lg={6} className="pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_16.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} className="border rounded-2 p-4">
                                <h2 className='section_Heading fs-3 mb-5'>
                                    <span>5 Star Review</span>
                                </h2>
                                    <div className="deal_slide-item p-3">
                                        <div className="deal_slide-thumb h-100 mb-5">
                                            <a href="#">
                                                <img src="https://html.themexriver.com/radios/assets/img/product/img_19.png" alt="Product Image" loading="lazy" />
                                            </a>
                                        </div>
                                        <div className="mxw_343 mb-4">
                                            <div className="product__progress progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                                            </div>

                                            <div className="ul_li_between">
                                            <span className="product__available">
                                                Available: <span>334</span>
                                            </span>
                                            <span className="product__available">
                                                Stock: <span>180</span>
                                            </span>
                                            </div>
                                        </div>
                                        <div className="deal_slide-content">
                                            <ul className="rating-star">
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaRegStar /></li>
                                                <li><FaRegStar /></li>
                                                <li>(126)</li>
                                            </ul>
                                            <h2 className="product_title my-3">
                                                <a href="#" className="fs-5">Skullcandy Dime True In-Ear Earbuds – Golden Red</a>
                                            </h2>
                                            <h4 className="product__price fs-6">(
                                                <span className="new">$28.52</span>
                                                <span>-</span>
                                                <span className="old">$30.52</span>
                                                )
                                            </h4>
                                        </div>
                                        <ul className="product__action">
                                            <li><a href="#"><CgCompressRight /></a></li>
                                            <li><a href="#"><CiShoppingBasket /></a></li>
                                            <li><a href="#"><LuHeart /></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <Row>
                                        <Col lg={6} className="border-end border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_13.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_09.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Skullcandy Dime True In-Ear Earbuds – Golden Red</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-end pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_07.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>        
                                        </Col>
                                        <Col lg={6} className="pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_15.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Top-rating">
                            <Row className="hot-deal__slide align-items-center">
                                <Col lg={4}>
                                    <Row>
                                        <Col lg={6} className="border-end border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_11.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_13.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Skullcandy Dime True In-Ear Earbuds – Golden Red</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-end pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_17.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>        
                                        </Col>
                                        <Col lg={6} className="pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_15.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} className="border rounded-2 p-4">
                                <h2 className='section_Heading fs-3 mb-5'>
                                    <span>5 Star Review</span>
                                </h2>
                                    <div className="deal_slide-item p-3">
                                        <div className="deal_slide-thumb h-100 mb-5">
                                            <a href="#">
                                                <img src="https://html.themexriver.com/radios/assets/img/product/img_19.png" alt="Product Image" loading="lazy" />
                                            </a>
                                        </div>
                                        <div className="mxw_343 mb-4">
                                            <div className="product__progress progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                                            </div>

                                            <div className="ul_li_between">
                                            <span className="product__available">
                                                Available: <span>334</span>
                                            </span>
                                            <span className="product__available">
                                                Stock: <span>180</span>
                                            </span>
                                            </div>
                                        </div>
                                        <div className="deal_slide-content">
                                            <ul className="rating-star">
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaRegStar /></li>
                                                <li><FaRegStar /></li>
                                                <li>(126)</li>
                                            </ul>
                                            <h2 className="product_title my-3">
                                                <a href="#" className="fs-5">Skullcandy Dime True In-Ear Earbuds – Golden Red</a>
                                            </h2>
                                            <h4 className="product__price fs-6">(
                                                <span className="new">$28.52</span>
                                                <span>-</span>
                                                <span className="old">$30.52</span>
                                                )
                                            </h4>
                                        </div>
                                        <ul className="product__action">
                                            <li><a href="#"><CgCompressRight /></a></li>
                                            <li><a href="#"><CiShoppingBasket /></a></li>
                                            <li><a href="#"><LuHeart /></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <Row>
                                        <Col lg={6} className="border-end border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_04.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-bottom">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_02.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Skullcandy Dime True In-Ear Earbuds – Golden Red</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                        <Col lg={6} className="border-end pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_07.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Portable 2TB External Hard Drive Portable HDD</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>        
                                        </Col>
                                        <Col lg={6} className="pt-4">
                                            <div className="deal_slide-item p-3">
                                                <div className="deal_slide-thumb">
                                                    <a href="#">
                                                        <img src="https://html.themexriver.com/radios/assets/img/product/img_10.png" alt="Product Image" loading="lazy" />
                                                    </a>
                                                </div>
                                                <div className="deal_slide-content">
                                                    <ul className="rating-star">
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li><FaRegStar /></li>
                                                        <li>(126)</li>
                                                    </ul>
                                                    <h2 className="product_title">
                                                        <a href="#">Rokinon Xeen CF 16mm T2.6 Pro Cinema Wide</a>
                                                    </h2>
                                                    <h4 className="product__price">(
                                                        <span className="new">$28.52</span>
                                                        <span>-</span>
                                                        <span className="old">$30.52</span>
                                                        )
                                                    </h4>
                                                </div>
                                                <ul className="product__action">
                                                    <li><a href="#"><CgCompressRight /></a></li>
                                                    <li><a href="#"><CiShoppingBasket /></a></li>
                                                    <li><a href="#"><LuHeart /></a></li>
                                                </ul>
                                                <div className="badge-skew">New</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>
        </Container>
    </section>
  )
}

export default SmartProducts
