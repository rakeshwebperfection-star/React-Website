import React, { useState } from "react";
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Slider from "react-slick";
import { FaStar, FaRegStar } from "react-icons/fa";
import { CgCompressRight } from "react-icons/cg"
import { CiShoppingBasket } from "react-icons/ci";
import { LuHeart } from "react-icons/lu";

function NewArrival1() {

    const recent = {
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false
    };

  return (
    <section className='new_Arrivel1'>
        <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="Recent">
                <div className='product_Nav-wrap'>
                    <h2 className='section_Heading'>
                        <span>Hot <span>New Arrival</span> You May Like</span>
                    </h2>
                    <Nav className="flex-row product_Nav">
                        <Nav.Item><Nav.Link eventKey="Recent">Recent</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Best-Seller">Best Seller</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Top">Top</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="New-Arrivals">New Arrivals</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Top-rating">Top Rating</Nav.Link></Nav.Item>
                    </Nav>
                </div>
                <div className='vd_Products'>
                    <Tab.Content>
                        <Tab.Pane eventKey="Recent">
                            <Slider {...recent} className="hot-deal__slide">
                                <div className="deal_slide-item">
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
                                <div className="deal_slide-item">
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
                                            <a href="#">JBL Tune 510BT Wireless On-Ear Head phones Blue</a>
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
                                <div className="deal_slide-item">
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
                                <div className="deal_slide-item">
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
                                            <a href="#">Galaxy S20 FE 5G Cell Phone, Factory UnlockedD</a>
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
                                <div className="deal_slide-item">
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
                                <div className="deal_slide-item">
                                    <div className="deal_slide-thumb">
                                        <a href="#">
                                            <img src="https://html.themexriver.com/radios/assets/img/product/img_06.png" alt="Product Image" loading="lazy" />
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
                                            <a href="#">Amazon Basics Window Air Conditioner Control</a>
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
                                <div className="deal_slide-item">
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
                            </Slider>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Best-Seller">
                            <Slider {...recent} className="hot-deal__slide">
                                <div className="deal_slide-item">
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
                                            <a href="#">JBL Tune 510BT Wireless On-Ear Head phones Blue</a>
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
                                <div className="deal_slide-item">
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
                                <div className="deal_slide-item">
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
                                <div className="deal_slide-item">
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
                                <div className="deal_slide-item">
                                    <div className="deal_slide-thumb">
                                        <a href="#">
                                            <img src="https://html.themexriver.com/radios/assets/img/product/img_06.png" alt="Product Image" loading="lazy" />
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
                                            <a href="#">Amazon Basics Window Air Conditioner Control</a>
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
                                <div className="deal_slide-item">
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
                                            <a href="#">Galaxy S20 FE 5G Cell Phone, Factory UnlockedD</a>
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
                                <div className="deal_slide-item">
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
                            </Slider>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Top">
                            <Slider {...recent} className="hot-deal__slide">
                                <div className="deal_slide-item">
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
                                <div className="deal_slide-item">
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
                                <div className="deal_slide-item">
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
                                            <a href="#">JBL Tune 510BT Wireless On-Ear Head phones Blue</a>
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
                                <div className="deal_slide-item">
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
                                            <a href="#">Galaxy S20 FE 5G Cell Phone, Factory UnlockedD</a>
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
                                <div className="deal_slide-item">
                                    <div className="deal_slide-thumb">
                                        <a href="#">
                                            <img src="https://html.themexriver.com/radios/assets/img/product/img_06.png" alt="Product Image" loading="lazy" />
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
                                            <a href="#">Amazon Basics Window Air Conditioner Control</a>
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
                                <div className="deal_slide-item">
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
                                <div className="deal_slide-item">
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
                            </Slider>
                        </Tab.Pane>
                        <Tab.Pane eventKey="New-Arrivals">
                            <Slider {...recent} className="hot-deal__slide">
                                <div className="deal_slide-item">
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
                                            <a href="#">Galaxy S20 FE 5G Cell Phone, Factory UnlockedD</a>
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
                                <div className="deal_slide-item">
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
                                <div className="deal_slide-item">
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
                                <div className="deal_slide-item">
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
                                            <a href="#">JBL Tune 510BT Wireless On-Ear Head phones Blue</a>
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
                                <div className="deal_slide-item">
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
                                <div className="deal_slide-item">
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
                                <div className="deal_slide-item">
                                    <div className="deal_slide-thumb">
                                        <a href="#">
                                            <img src="https://html.themexriver.com/radios/assets/img/product/img_06.png" alt="Product Image" loading="lazy" />
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
                                            <a href="#">Amazon Basics Window Air Conditioner Control</a>
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
                            </Slider>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Top-rating">
                            <Slider {...recent} className="hot-deal__slide">
                                <div className="deal_slide-item">
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
                                            <a href="#">JBL Tune 510BT Wireless On-Ear Head phones Blue</a>
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
                                <div className="deal_slide-item">
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
                                <div className="deal_slide-item">
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
                                <div className="deal_slide-item">
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
                                <div className="deal_slide-item">
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
                                            <a href="#">Galaxy S20 FE 5G Cell Phone, Factory UnlockedD</a>
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
                                <div className="deal_slide-item">
                                    <div className="deal_slide-thumb">
                                        <a href="#">
                                            <img src="https://html.themexriver.com/radios/assets/img/product/img_06.png" alt="Product Image" loading="lazy" />
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
                                            <a href="#">Amazon Basics Window Air Conditioner Control</a>
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
                                <div className="deal_slide-item">
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
                            </Slider>
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>
        </Container>
    </section>
  )
}

export default NewArrival1
