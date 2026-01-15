import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function OtherProjects() {
  return (
    <section className='other-project-sec'>
        <Container>
            <Row>
                <Col sm={12}>
                    <h2 className='numbered-heading mb-3'>Other Noteworthy Projects</h2>
                    <h4 className='mb-5'>View The Archive</h4>
                </Col>
            </Row>
            <Row className='row-gap-4'>
                <Col md="6" lg={4}>
                    <div className='project-grid-column'>
                        <div className='project-grid-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        </div>
                        <h3>Integrating Algolia Search with WordPress Multisite</h3>
                        <p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>
                        <ul class="project-tech-list">
                            <li>Algolia</li>
                            <li>WordPress</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                </Col>
                <Col md="6" lg={4}>
                    <div className='project-grid-column'>
                        <div className='project-grid-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        </div>
                        <h3>Time to Have More Fun</h3>
                        <p>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS</p>
                        <ul class="project-tech-list">
                            <li>Next.js</li>
                            <li>Tailwind CSS</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                </Col>
                <Col md="6" lg={4}>
                    <div className='project-grid-column'>
                        <div className='project-grid-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        </div>
                        <h3>Building a Headless Mobile App CMS From Scratch</h3>
                        <p>Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement</p>
                        <ul class="project-tech-list">
                            <li>Node</li>
                            <li>Express</li>
                            <li>Firebase</li>
                            <li>Vue</li>
                        </ul>
                    </div>
                </Col>
                <Col md="6" lg={4}>
                    <div className='project-grid-column'>
                        <div className='project-grid-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        </div>
                        <h3>OctoProfile</h3>
                        <p>A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.</p>
                        <ul class="project-tech-list">
                            <li>Next.js</li>
                            <li>Chart.js</li>
                            <li>GitHub API</li>
                        </ul>
                    </div>
                </Col>
                <Col md="6" lg={4}>
                    <div className='project-grid-column'>
                        <div className='project-grid-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        </div>
                        <h3>Google Keep Clone</h3>
                        <p>A simple Google Keep clone built with Vue and Firebase.</p>
                        <ul class="project-tech-list">
                            <li>Vue</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                </Col>
                <Col md="6" lg={4}>
                    <div className='project-grid-column'>
                        <div className='project-grid-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        </div>
                        <h3>Apple Music Embeddable Web Player Widget</h3>
                        <p>Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging. Read more about this project on.</p>
                        <ul class="project-tech-list">
                            <li>MusicKit.js</li>
                            <li>JS</li>
                            <li>SCSS</li>
                        </ul>
                    </div>
                </Col>
                <Col md={12}>
                    <div className='text-center mx-auto mt-5'>
                        <a href="#" className='btn-primary'>Show More</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default OtherProjects
