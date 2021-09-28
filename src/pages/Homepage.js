import React, { useRef, useEffect, useState } from "react"
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl, { GeolocateControl } from '!mapbox-gl';
import CategoryTile from "../components/CategoryTile"
import DealTile from "../components/DealTile"

mapboxgl.accessToken = 'pk.eyJ1IjoibGl6emllaGFuZCIsImEiOiJja3RvaGRnaGEwY3NqMm9ueTFxcWNhdDh5In0.kinvaFf_wJwiFsHBbZRzwA';

function Homepage() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    const [categories, setCategories] = useState([])
    const [deals, setDeals] = useState([])

    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
        var crd = pos.coords;
        console.log(crd.latitude)
        console.log(crd.longitude)
        setLat(crd.latitude)
        setLng(crd.longitude)
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    // useEffect(() => {
    //     if (map.current) return; // initialize map only once
    //     map.current = new mapboxgl.Map({
    //         container: mapContainer.current,
    //         style: 'mapbox://styles/mapbox/streets-v11',
    //         center: [lng, lat],
    //         zoom: zoom
    //     }, [lng]);

    //     map.addControl(
    //         new mapboxgl.GeolocateControl({
    //             positionOptions: {
    //                 enableHighAccuracy: true
    //             },
    //             // When active the map will receive updates to the device's location as it changes.
    //             trackUserLocation: true,
    //             // Draw an arrow next to the location dot to indicate which direction the device is heading.
    //             showUserHeading: true
    //         })
    //     );
    // });

    const getMap = () => {
        new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v9',
            center: [7.32, 60.44],
            zoom: 6,
        })
    };

    const Map = () => {
        useEffect(() => {
            const map = getMap();
            map.addControl(new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                // When active the map will receive updates to the device's location as it changes.
                trackUserLocation: true,
                // Draw an arrow next to the location dot to indicate which direction the device is heading.
                showUserHeading: true
            }));
        }, []);
    };


    useEffect(() => {
        fetch('http://localhost:3030/categories')
            .then(response => response.json())
            .then(data => setCategories(data.data));

        fetch('http://localhost:3030/deals')
            .then(response => response.json())
            .then(data => setDeals(data.data));
    }, [])

    return (
        <main className="homepage">
            <div className="homepage-container">
                <div className="map-display-container">
                    <div className="map"><div ref={mapContainer} className="map-container" /></div>
                </div>
                <div className="categories">
                    <h2 className="category-title">Categories</h2>
                    <div className="category-tiles">
                        {categories.map((category) => (
                            <CategoryTile category={category} />
                        )
                        )}
                    </div>
                </div>
                <div className="best-deals">
                    <h2 className="best-deals-title"> Best Deals</h2>
                    <div className="deal-tiles">
                        {deals.map((deal) => (
                            <DealTile deal={deal} />
                        )
                        )}
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Homepage;