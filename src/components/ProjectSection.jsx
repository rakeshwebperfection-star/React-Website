import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function ProjectSection() {
  return (
    <section id='project' className='project-section'>
      <Container>
        <div className='about-inner'>
            <Row>
                <Col sm={12} data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <h2 className='numbered-heading'>Some Things I’ve Built</h2>
                </Col>
            </Row>
            <Row className='my-4'>
                <Col md={6} data-aos="zoom-in-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <div className='project-column'>
                        <div className='project-img'>
                            <img src="https://v4.brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/f47db/halcyon.avif" alt="project-img" loading='lazy' />
                        </div>
                        <div className='project-info'>
                            <span className='title'>Featured Project</span>
                            <h3 className='heading'>Halcyon Theme</h3>
                            <p className='title-box'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                            <ul class="project-tech-list">
                                <li>VS Code</li>
                                <li>Sublime Text</li>
                                <li>Atom</li>
                                <li>iTerm2</li>
                                <li>Hyper</li>
                            </ul>
                            <div class="project-links">
                                <a href="https://github.com/bchiang7/halcyon-site" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </a>
                                <a href="https://halcyon-theme.netlify.com/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6} data-aos="zoom-in-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <div className='project-column'>
                        <div className='project-img'>
                            <img src="https://v4.brittanychiang.com/static/3936989a99991beb6d649d7a7039df60/f47db/demo.avif" alt="project-img" loading='lazy' />
                        </div>
                        <div className='project-info'>
                            <span className='title'>Featured Project</span>
                            <h3 className='heading'>Spotify Profile</h3>
                            <p className='title-box'>A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
                            <ul class="project-tech-list">
                                <li>VS Code</li>
                                <li>Sublime Text</li>
                                <li>Atom</li>
                                <li>iTerm2</li>
                                <li>Hyper</li>
                            </ul>
                            <div class="project-links">
                                <a href="https://github.com/bchiang7/halcyon-site" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </a>
                                <a href="https://halcyon-theme.netlify.com/" aria-label="External Link" class="external" rel="noopener noreferrer" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
      </Container>
    </section>
  )
}

export default ProjectSection
