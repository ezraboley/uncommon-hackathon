import React, { Component } from 'react';
import {map} from "../public/googleMapsMagic.js";
console.log(map);
export class EmptyMapShell extends Component {
    render() {
        return (
            <div style={{height: '100%'}} id='map'> 
            </div>
        )
    }
}

export class GoogleMap extends Component {
    render() {
        return (
            <script>
            </script>
        )
    }
}

