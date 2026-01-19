import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { HiArrowNarrowRight } from "react-icons/hi";

import { FaStar, FaRegStar } from "react-icons/fa";



function HeroSlider1() {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const settings = {
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };

  return (
    <section className="hero_Slider1-wrapper">
      <Container>
        <Row className="align-items-center">
          <Col lg={9}>
            <Row className="align-items-center flex-row-reverse">
              <Col lg={7}>
                <div className="hero_Slider">
                    <Slider className="hero__product-image" asNavFor={nav2} ref={(slider) => setNav1(slider)} slidesToShow={1} slidesToScroll={1} arrows={false} fade >
                        <div className="hero__product-item">
                            <img src="https://html.themexriver.com/radios/assets/img/product/img_52.png" alt="Slider Image" loading="lazy" />
                        </div>
                        <div className="hero__product-item">
                            <img src="https://html.themexriver.com/radios/assets/img/product/img_53.png" alt="Slider Image" loading="lazy" />
                        </div>
                        <div className="hero__product-item">
                            <img src="https://html.themexriver.com/radios/assets/img/product/img_54.png" alt="Slider Image" loading="lazy" />
                        </div>
                        <div className="hero__product-item">
                            <img src="https://html.themexriver.com/radios/assets/img/product/img_52.png" alt="Slider Image" loading="lazy" />
                        </div>
                        <div className="hero__product-item">
                            <img src="https://html.themexriver.com/radios/assets/img/product/img_54.png" alt="Slider Image" loading="lazy" />
                        </div>
                    </Slider>

                    <Slider className="hero__product-nav" asNavFor={nav1} ref={(slider) => setNav2(slider)} slidesToShow={3} slidesToScroll={1} arrows={false} focusOnSelect>
                        <div className="hero__product-item">
                            <img src="https://html.themexriver.com/radios/assets/img/product/img_52.png" alt="Slider Image" loading="lazy" />
                        </div>
                        <div className="hero__product-item">
                            <img src="https://html.themexriver.com/radios/assets/img/product/img_53.png" alt="Slider Image" loading="lazy" />
                        </div>
                        <div className="hero__product-item">
                            <img src="https://html.themexriver.com/radios/assets/img/product/img_54.png" alt="Slider Image" loading="lazy" />
                        </div>
                        <div className="hero__product-item">
                            <img src="https://html.themexriver.com/radios/assets/img/product/img_52.png" alt="Slider Image" loading="lazy" />
                        </div>
                        <div className="hero__product-item">
                            <img src="https://html.themexriver.com/radios/assets/img/product/img_54.png" alt="Slider Image" loading="lazy" />
                        </div>
                    </Slider>
                    <div className="hero__product-offer">
                        <span className="discount">29 <span>%</span></span>
                        <span>off</span>
                    </div>
                </div>
              </Col>

              <Col lg={5}>
                <div className="hero__content">
                  <span className="subtitle">100% Best Product</span>
                  <h2 className="title">
                    Waterma Watch <br /> Beats Studio
                  </h2>
                  <p>Widescreen 4k ultra Laptop</p>

                  <h3 className="price">
                    $1800.99 / <span>$2860</span>
                  </h3>

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

                  <a className="hero__btn" href="#">
                    Shop Now <HiArrowNarrowRight />
                  </a>
                </div>
              </Col>

            </Row>
          </Col>

          <Col lg={3}>
            <div className="top_Product-box">
                <h2 className="top_Product-Head mb-4">
                    <span>Top Product</span>
                </h2>
                <Slider {...settings} className="hot-deal__slide">
                    <div className="deal_slide-item">
                        <div className="deal_slide-thumb">
                            <a href="#">
                                <img src="https://html.themexriver.com/radios/assets/img/product/img_55.png" alt="Product Image" loading="lazy" />
                            </a>
                        </div>
                        <div className="deal_slide-content">
                            <ul className="rating-star">
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaRegStar /></li>
                                <li><FaRegStar /></li>
                            </ul>
                            <h2 className="product_title">
                                <a href="#">Asus 2022 Vivobook</a>
                            </h2>
                            <h4 className="product__price">
                                <span className="new">$30.52</span>
                                <span className="old">$28.52</span>
                            </h4>
                            <div className="mxw_343 mb-4">
                                <div className="product__progress progress" style={{ height: "8px" }}>
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}></div>
                                </div>
                                <div className="ul_li_between">
                                    <span className="product__available">Available: <span>334</span></span>
                                    <span className="product__available">Stock: <span>180</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="deal_slide-item">
                        <div className="deal_slide-thumb">
                            <a href="#">
                                <img src="https://html.themexriver.com/radios/assets/img/product/img_55.png" alt="Product Image" loading="lazy" />
                            </a>
                        </div>
                        <div className="deal_slide-content">
                            <ul className="rating-star">
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaRegStar /></li>
                                <li><FaRegStar /></li>
                            </ul>
                            <h2 className="product_title">
                                <a href="#">Asus 2022 Vivobook</a>
                            </h2>
                            <h4 className="product__price">
                                <span className="new">$30.52</span>
                                <span className="old">$28.52</span>
                            </h4>
                            <div className="mxw_343 mb-4">
                                <div className="product__progress progress" style={{ height: "8px" }}>
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}></div>
                                </div>
                                <div className="ul_li_between">
                                    <span className="product__available">Available: <span>334</span></span>
                                    <span className="product__available">Stock: <span>180</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="deal_slide-item">
                        <div className="deal_slide-thumb">
                            <a href="#">
                                <img src="https://html.themexriver.com/radios/assets/img/product/img_55.png" alt="Product Image" loading="lazy" />
                            </a>
                        </div>
                        <div className="deal_slide-content">
                            <ul className="rating-star">
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaRegStar /></li>
                                <li><FaRegStar /></li>
                            </ul>
                            <h2 className="product_title">
                                <a href="#">Asus 2022 Vivobook</a>
                            </h2>
                            <h4 className="product__price">
                                <span className="new">$30.52</span>
                                <span className="old">$28.52</span>
                            </h4>
                            <div className="mxw_343 mb-4">
                                <div className="product__progress progress" style={{ height: "8px" }}>
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}></div>
                                </div>
                                <div className="ul_li_between">
                                    <span className="product__available">Available: <span>334</span></span>
                                    <span className="product__available">Stock: <span>180</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="deal_slide-item">
                        <div className="deal_slide-thumb">
                            <a href="#">
                                <img src="https://html.themexriver.com/radios/assets/img/product/img_55.png" alt="Product Image" loading="lazy" />
                            </a>
                        </div>
                        <div className="deal_slide-content">
                            <ul className="rating-star">
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaRegStar /></li>
                                <li><FaRegStar /></li>
                            </ul>
                            <h2 className="product_title">
                                <a href="#">Asus 2022 Vivobook</a>
                            </h2>
                            <h4 className="product__price">
                                <span className="new">$30.52</span>
                                <span className="old">$28.52</span>
                            </h4>
                            <div className="mxw_343 mb-4">
                                <div className="product__progress progress" style={{ height: "8px" }}>
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}></div>
                                </div>
                                <div className="ul_li_between">
                                    <span className="product__available">Available: <span>334</span></span>
                                    <span className="product__available">Stock: <span>180</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="deal_slide-item">
                        <div className="deal_slide-thumb">
                            <a href="#">
                                <img src="https://html.themexriver.com/radios/assets/img/product/img_55.png" alt="Product Image" loading="lazy" />
                            </a>
                        </div>
                        <div className="deal_slide-content">
                            <ul className="rating-star">
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaRegStar /></li>
                                <li><FaRegStar /></li>
                            </ul>
                            <h2 className="product_title">
                                <a href="#">Asus 2022 Vivobook</a>
                            </h2>
                            <h4 className="product__price">
                                <span className="new">$30.52</span>
                                <span className="old">$28.52</span>
                            </h4>
                            <div className="mxw_343 mb-4">
                                <div className="product__progress progress" style={{ height: "8px" }}>
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}></div>
                                </div>
                                <div className="ul_li_between">
                                    <span className="product__available">Available: <span>334</span></span>
                                    <span className="product__available">Stock: <span>180</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="deal_slide-item">
                        <div className="deal_slide-thumb">
                            <a href="#">
                                <img src="https://html.themexriver.com/radios/assets/img/product/img_55.png" alt="Product Image" loading="lazy" />
                            </a>
                        </div>
                        <div className="deal_slide-content">
                            <ul className="rating-star">
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaRegStar /></li>
                                <li><FaRegStar /></li>
                            </ul>
                            <h2 className="product_title">
                                <a href="#">Asus 2022 Vivobook</a>
                            </h2>
                            <h4 className="product__price">
                                <span className="new">$30.52</span>
                                <span className="old">$28.52</span>
                            </h4>
                            <div className="mxw_343 mb-4">
                                <div className="product__progress progress" style={{ height: "8px" }}>
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}></div>
                                </div>
                                <div className="ul_li_between">
                                    <span className="product__available">Available: <span>334</span></span>
                                    <span className="product__available">Stock: <span>180</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSlider1;