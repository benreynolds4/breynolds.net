import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export class Biography extends Component {

    getAge(dob) {
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms); 
  
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    
    render() {
        return (
        <section className="section about-section gray-bg" id="about">
            <Container>
                <Row className="align-items-center flex-row-reverse">
                    <Col lg={6}>
                        <div className="about-text go-to">
                            <h3 className="dark-color">Ben Reynolds</h3>
                            <h6 className="theme-color lead">Software Development Engineer based in Ireland</h6>
                            <ul>
                              <li>Software Development Engineer at <mark>Workday</mark></li>
                              <li>Swim. Bike. <mark>Run.</mark></li>
                            </ul> 
                            <Row className="about-list">
                                <Col md={6}>
                                    <div className="media">
                                        <label>Birthday</label>
                                        <p>7th December 1994</p>
                                    </div>
                                    <div className="media">
                                        <label>Age</label>
                                        <p>{this.getAge(new Date(1994, 12, 7))} Yrs</p>
                                    </div>
                                    <div className="media">
                                        <label>Address</label>
                                        <p>Dublin</p>
                                    </div>
                                    <div className="media">
                                        <label>Country</label>
                                        <p>Ireland</p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="media">
                                        <label>E-mail</label>
                                        <p>ben.reynolds@ucdconnect.ie</p>
                                    </div>
                                    <Row>
                                        <Col md={4}>
                                            <div className="media">
                                                <p><a href="https://github.com/benreynolds4"><FontAwesomeIcon size="2x" className="theme-color"  icon={['fab', 'github']} /></a></p>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="media">
                                                <p><a href="https://www.linkedin.com/in/ben-reynolds-48aa3a86/"><FontAwesomeIcon size="2x" className="theme-color"  icon={['fab', 'linkedin']} /></a></p>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="media">
                                                <p><a href="https://twitter.com/BenReynolds4"><FontAwesomeIcon size="2x" className="theme-color"  icon={['fab', 'twitter']} /></a></p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-avatar">
                            <img src="/profile.png" title="Profile Avatar" alt="Profile Avatar" />
                        </div>
                    </Col>
                </Row>
                <div className="counter">
                    <Row>
                        <Col lg={4} className="col-6">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="500" data-speed="500">Workday</h6>
                                <p className="m-0px font-w-600">Software Developent Engineer</p>
                            </div>
                        </Col>
                        <Col lg={4} className="col-6">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="500" data-speed="500">Bsc. Computer Sci</h6>
                                <p className="m-0px font-w-600">Degree</p>
                            </div>
                        </Col>
                        <Col lg={4} className="col-6">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="150" data-speed="150">{this.getAge(new Date(2017, 9, 1))}+ Yrs</h6>
                                <p className="m-0px font-w-600">Industry Exp.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        )
    }
}

export default Biography
