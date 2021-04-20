import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class PortfolioItem extends Component {
    render() {
        return (
            <Col lg={6} sm={6} className="mb-30 pb-5">
                <a class="card" href={this.props.url}>
                    <div className="box-shadow bg-white rounded-circle mx-auto text-center box" ><FontAwesomeIcon size="3x" className="head-icon" icon={this.props.icon} /></div>
                    <div className="card-body text-center">
                        <h3 className="card-title pt-1">{this.props.title}</h3>
                        <p className="card-text text-sm">{this.props.description}</p>
                        <span className="text-sm text-uppercase font-weight-bold">Visit&nbsp;
                            <i class="fe-icon-arrow-right"></i>
                        </span>
                    </div>
                </a>
            </Col>
        )
    }
}

export default PortfolioItem
