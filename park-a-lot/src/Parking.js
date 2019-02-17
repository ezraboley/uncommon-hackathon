import React, { Component } from "react";

export default class ParkingSpot extends Component {
    render() {
        return (
            <button style={{position: "absolute", left: "100px", width: "100px", height: "100px"}}
                    onClick={console.log(window.map)}
            >
            hey
            </button>
        );
    }
}


