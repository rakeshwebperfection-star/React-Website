import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaStar, FaRegStar } from "react-icons/fa";
import { CgCompressRight } from "react-icons/cg"
import { CiShoppingBasket } from "react-icons/ci";
import { LuHeart } from "react-icons/lu";

function CatagorySection1() {
  return (
    <section className='ct_Slider-product vd_Products'>
        <Container>
            <Row>
                <Col lg={3}>
                    <div className='product-category'>
                        <h2 className='section-heading mb-4'>
                            <span>Catagory</span>
                        </h2>
                        <ul className="list-unstyled">
                            <li className="cat-item-has-children">
                                <a href="#!">
                                <img src="https://html.themexriver.com/radios/assets/img/icon/cat_01.svg" alt="" />
                                Bluetooth speaker
                                </a>
                            </li>
                            <li className="cat-item-has-children">
                                <a href="#!">
                                <img src="https://html.themexriver.com/radios/assets/img/icon/cat_02.svg" alt="" />
                                Digital camera
                                </a>
                            </li>
                            <li className="cat-item-has-children">
                                <a href="#!">
                                <img src="https://html.themexriver.com/radios/assets/img/icon/cat_03.svg" alt="" />
                                Laser printer
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                <img src="https://html.themexriver.com/radios/assets/img/icon/cat_04.svg" alt="" />
                                Electric frying pan
                                </a>
                            </li>
                            <li className="cat-item-has-children">
                                <a href="#!">
                                <img src="https://html.themexriver.com/radios/assets/img/icon/cat_05.svg" alt="" />
                                Robotics vacuum
                                </a>
                            </li>
                            <li className="cat-item-has-children">
                                <a href="#!">
                                <img src="https://html.themexriver.com/radios/assets/img/icon/cat_06.svg" alt="" />
                                external hard drive
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                <img src="https://html.themexriver.com/radios/assets/img/icon/cat_07.svg" alt="" />
                                Electric razor
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                <img src="https://html.themexriver.com/radios/assets/img/icon/cat_08.svg" alt="" />
                                Washing machine
                                </a>
                            </li>
                            <li className="cat-item-has-children">
                                <a href="#!">
                                <img src="https://html.themexriver.com/radios/assets/img/icon/cat_09.svg" alt="" />
                                Rice cooker
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                <img src="https://html.themexriver.com/radios/assets/img/icon/cat_10.svg" alt="" />
                                Telivsion &amp; Monitor
                                </a>
                            </li>
                            <li className="more-item">
                                <a href="#!">+ More item</a>
                            </li>
                            </ul>

                    </div>
                </Col>
                <Col lg={9}>
                    <div className='rd-slide-products'>
                        <h2 className='section-heading mb-4'>
                            <span>Trending Product</span>
                        </h2>
                        <Row className="hot-deal__slide">
                            <Col md={6} lg={3} className='border-end'>
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
                                            <a href="#">Aroma Housewares 4-Cups 1Qt. Rice & Grain</a>
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
                            <Col md={6} lg={3} className='border-end'>
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
                                            <a href="#">SAMSUNG Galaxy A13 5G Cell Phone, Factory Unlocked</a>
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
                            <Col md={6} lg={3} className='border-end'>
                                <div className="deal_slide-item p-3">
                                    <div className="deal_slide-thumb">
                                        <a href="#">
                                            <img src="https://html.themexriver.com/radios/assets/img/product/img_12.png" alt="Product Image" loading="lazy" />
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
                                            <a href="#">SAMSUNG Galaxy S20 FE 5G Cell Phone, Factory</a>
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
                            <Col md={6} lg={3}>
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
                                            <a href="#">Sceptre 24″ Professional Thin 75Hz 1080p LED Monitor</a>
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
                            <Col md={6} lg={3} className='border-end border-top'>
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
                                            <a href="#">Panasonic Cordless Phone System, Expandable</a>
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
                            <Col md={6} lg={3} className='border-end border-top'>
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
                            <Col md={6} lg={3} className='border-end border-top'>
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
                                            <a href="#">DEWALT 20V MAX* XR Oscillating Tool Kit</a>
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
                            <Col md={6} lg={3} className='border-top'>
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
                                            <a href="#">Ninja Compact Smoothie & Food Processing Blender</a>
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
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CatagorySection1
