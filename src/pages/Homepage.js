import React, { useRef, useEffect, useState } from "react"
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibGl6emllaGFuZCIsImEiOiJja3RvaGRnaGEwY3NqMm9ueTFxcWNhdDh5In0.kinvaFf_wJwiFsHBbZRzwA';

function Homepage() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    // navigator.geolocation.getCurrentPosition(success, error,)

    // function success(pos) {
    //     var crd = pos.coords;

    //     console.log('Your current position is:');
    //     console.log(`Latitude : ${crd.latitude}`);
    //     console.log(`Longitude: ${crd.longitude}`);
    //     console.log(`More or less ${crd.accuracy} meters.`);
    // }

    // function error(err) {
    //     console.warn(`ERROR(${err.code}): ${err.message}`);
    // }

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <main className="homepage">
            <div className="homepage-container">
                <div className="map-display-container">
                    <div className="map"><div ref={mapContainer} className="map-container" /></div>
                </div>
                <div className="categories">
                    <h2 className="category-title">Categories</h2>
                    <div className="category-tiles">
                        <div className="category-tile"> Breakfast</div>
                        <div className="category-tile"> Juice</div>
                        <div className="category-tile"> American</div>
                        <div className="category-tile"> Coffee</div>
                    </div>
                </div>
                <div className="best-deals">
                    <h2 className="best-deals-title"> Best Deals</h2>
                    <div className="deal-tiles">
                        <div className="deal-tile"> Deal</div>
                        <div className="deal-tile"> Deal</div>
                        <div className="deal-tile"> Deal</div>
                        <div className="deal-tile"> Deal</div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Homepage;