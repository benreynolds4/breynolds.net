import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { faEuroSign, faFile, faHeartbeat, faRunning, faGolfBall } from '@fortawesome/free-solid-svg-icons'

import PortfolioItem from './PortfolioItem'

export class Porfolio extends Component {
    render() {
        return (
            <Container className="pt-3 mb-3">
                <h3 className="dark-color">Side Projects:</h3>
                <Row className="pt-5 mt-30">
                    <PortfolioItem title="Masters Sweepstakes" description="An application for running the annual Masters sweepstakes. Uses a Lambda python function and React frontent" url="http://masters.nolan.golf" icon={faGolfBall} />
                    <PortfolioItem title="Tax Return" description="Accountants are expensice! Calculates taxes!" url="http://tax.breynolds.net" icon={faEuroSign} />
                    <PortfolioItem title="RTSO1 Generator" description="An application that will populate your RTSO1 Form." url="http://espp.breynolds.net" icon={faFile} />
                    <PortfolioItem title="Whoop / MyFitnessPal" description="An application that pulls data from both MyfitnessPal and Whoop and collates them." url="http://whoop-mfp.breynolds.net" icon={faHeartbeat} />
                    <PortfolioItem title="Training Tracker" description="An application that pulls data from both MyfitnessPal and Whoop and strava collates them." url="http://training.breynolds.net" icon={faRunning} />
                </Row>
            </Container>
        )
    }
}

export default Porfolio
