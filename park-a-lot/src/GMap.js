import React, { Component } from 'react';

export class EmptyMapShell extends Component {
    render() {
        return (
                    )
    }
}

export class GoogleMap extends Component {
    render() {
        let coords = [
                        {lat: 41.799632, lng:-87.591115},
                        {lat: 41.799793, lng: -87.591124},
                        {lat: 41.799790, lng: -87.591670},
                        {lat: 41.799626, lng: -87.591666}
                    ];
        while (window.google == undefined) {}
        return (
            <script>
                {
                    window.google.maps.Polygon({
                        map: window.map, 
                        fillColor: "blue",
                        paths: coords
                    })
                }
            </script>
        )
    }
}

