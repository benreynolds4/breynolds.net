import React, { Component } from 'react'

import { VectorMap } from "react-jvectormap"


import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const { getCode, getName, getData } = require("country-list");
export class Map extends Component {

    handleClick = (e, countryCode) => {
        console.log(countryCode);
    };
    

    render() {
        const mapData = {}
        const countries = [
            getCode("Ireland"), "GB", getCode('Scotland'),
            getCode('France'), getCode('Austria'), getCode('Tunisa'),
            getCode('Norway'), getCode('Italy'), getCode('Spain'), 
            getCode('Netherlands'), getCode('Bulgaria'),  
            getCode('South Africa'), getCode('Thailand'), "US",
            'VN', getCode('Cambodia'), getCode('Indonesia'), 
            getCode('Japan'), getCode('Canada'), getCode('Tunisia'), 
            getCode('Germany'), "CZ", getCode('Hungary'), 
            getCode('Portugal'), getCode('Malaysia'), getCode('Singapore'), 
            getCode('Iceland')
        ]
        countries.forEach(country => mapData[country] = 100000)
        console.log(getCode("Ireland"))
         

        return (
            <Container className="pt-3 mb-3">
                <h3 className="dark-color">Bid to see the World:</h3>
                <Row className="pt-5 mt-30">
                    <div style={{width: "100%", height: 500}}>
                        <VectorMap map={"world_mill"}
                                backgroundColor="transparent"
                                ref="map"
                                zoomOnScroll={false}
                                containerStyle={{
                                    width: '100%',
                                    height: '100%'
                                }}
                                containerClassName="map"
                                onRegionClick={this.handleClick}
                                
                                regionStyle={{
                                    initial: {
                                        fill: "#e4e4e4",
                                        "fill-opacity": 0.9,
                                        stroke: "none",
                                        "stroke-width": 0,
                                        "stroke-opacity": 0
                                    },
                                    hover: {
                                        "fill-opacity": 0.8,
                                        cursor: "pointer"
                                    },
                                    selected: {
                                        fill: "#20247b" //color for the clicked country
                                    },
                                    selectedHover: {}
                                    }}
                                    regionsSelectable={false}
                                    series={{
                                    regions: [
                                        {
                                        values: mapData, //this is your data
                                        scale: ["#146804", "#fe5b5b"], //your color game's here
                                        normalizeFunction: "polynomial"
                                        }
                                    ]
                                    }}
                        />
                    </div>
                </Row>
            </Container>
        )
    }
}

export default Map
