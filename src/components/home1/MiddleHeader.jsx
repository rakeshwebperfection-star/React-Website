import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { FiSearch, FiUser } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import brandLogo from "../../assets/images/brand_logo.png";


function MiddleHeader() {
    
    const [validated, setValidated] = useState(false);

  return (
    <Navbar expand="lg" className="middle-header pb-4">
      <Container>
        <Navbar.Brand href="/">
            {/* <img src="https://html.themexriver.com/radios/assets/img/logo/logo.svg" alt="Brand Logo" loading='lazy' /> */}
           <img src={brandLogo} alt="Brand Logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 mx-auto">
            <Form className='search-form' noValidate validated={validated}>
                <div className='select-box'>
                    <Form.Select aria-label="Default select example">
                        <option>All Categories</option>
                        <option value="1">Summer collections</option>
                        <option value="2">Breakfast & Dairy</option>
                        <option value="3">Beverage & Drinks</option>
                        <option value="4">Cocolate Box</option>
                        <option value="5">Dried Food Corner</option>
                        <option value="6">Frozen Foods</option>
                        <option value="7">Baby Food Corner</option>
                        <option value="8">Milk & Juices</option>
                        <option value="9">Organic & Snacks</option>
                    </Form.Select>
                </div>
                <Form.Control type="text" placeholder="Search" className="mr-sm-2" required />
                <button type="submit" className='btn-search'><FiSearch /></button>
            </Form>
          </Nav>
        </Navbar.Collapse>
        <div className='header__Info'>
            <div className='header__language'>
                <Form.Select aria-label="Default select example" className='select_language'>
                    <option>USD</option>
                    <option value="BDT">BDT</option>
                    <option value="EUR">EUR</option>
                </Form.Select>
                <Form.Select aria-label="Default select example" className='select_language'>
                    <option>Arabic</option>
                    <option value="Bangla">Bangla</option>
                </Form.Select>
            </div>
            <div className='header__Icons'>
                <ul>
                    <li>
                        <Link href="#"><FiUser /></Link>
                    </li>
                    <li>
                        <Link href="#"><LuHeart /></Link>
                    </li>
                    <li>
                        <Link href="#"><BsCart /></Link>
                    </li>
                </ul>
            </div>
        </div>
      </Container>
    </Navbar>
  )
}

export default MiddleHeader
