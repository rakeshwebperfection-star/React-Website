import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

function WorkSection() {

  return (
    <section id='worked' className='worked-section about-section'>
      <Container>
        <div className='about-inner'>
            <h2 className='numbered-heading'>Where I’ve Worked</h2>
            <Tab.Container id="left-tabs-example" defaultActiveKey="Upstatement">
                <Row className='worked-tabs'>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item><Nav.Link eventKey="Upstatement">Upstatement</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Apple">Apple</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Scout">Scout Studio</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="Starry">Starry</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="MullenLowe">MullenLowe</Nav.Link></Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="Upstatement">
                            <h4>Lead Engineer <span>@ Upstatement</span></h4>
                            <span>May 2018 - Present</span>
                            <ul>
                                <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</li>
                                <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
                                <li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
                                <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</li>
                            </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Apple">
                            <h4>UI Engineer Co-op <span>@ Apple</span></h4>
                            <span>July - December 2017</span>
                            <ul>
                                <li>Developed and styled interactive web applications for Apple Music using Ember and SCSS</li>
                                <li>Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations</li>
                                <li>Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback</li>
                                <li>Contributed extensively to the creation of MusicKit JS, a public-facing JavaScript SDK for embedding Apple Music players into web applications</li>
                            </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Scout">
                            <h4>Developer <span>@ Scout Studio</span></h4>
                            <span>Spring 2016 & 2017</span>
                            <ul>
                                <li>Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community</li>
                                <li>Built and delivered technical solutions according to stakeholder business requirements</li>
                            </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Starry">
                            <h4>Software Engineer Co-op <span>@ Starry</span></h4>
                            <span>July - December 2016</span>
                            <ul>
                                <li>Engineered and improved major features of Starry's customer-facing Android web app using ES6, Handlebars, Backbone, Marionette, and CSS</li>
                                <li>Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Starry Station internet router</li>
                                <li>Collaborated with designers and other developers to ensure thoughtful and consistent user experiences across Starry’s iOS and Android mobile apps</li>
                            </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="MullenLowe">
                            <h4>Creative Technologist Co-op <span>@ MullenLowe</span></h4>
                            <span>July - December 2015</span>
                            <ul>
                                <li>Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</li>
                                <li>Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness</li>
                                <li>Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more</li>
                                <li>Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more</li>
                            </ul>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
      </Container>
    </section>
  )
}

export default WorkSection
