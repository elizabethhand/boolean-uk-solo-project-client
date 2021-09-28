import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function CafeDisplayPage() {
    let { id } = useParams();
    let [cafe, setCafe] = useState()

    fetch(`http://localhost:3030/restaurant/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            setCafe(data.data)
        })

    console.log("cafe", cafe)

    if (cafe) {
        return (
            <>

                <section class="cafe-info">
                    <div class="cafe-container wrapper">
                        <div class="cafe-details">
                            <span class="box">Meal deal</span>
                            <h1>{cafe.name}</h1>
                            <div class="rating">
                                <img src="assets/star.svg" alt="" />
                                <img src="assets/star.svg" alt="" />
                                <img src="assets/star.svg" alt="" />
                                <img src="assets/star.svg" alt="" />
                                <span> 500+ Ratings</span>
                            </div>
                        </div>
                        <div class="cafe-picture">
                            <img src="assets/cafe-display.png" alt="" />
                            <div class="walking-container box">
                                <img src="assets/walk.svg" alt="" />
                                <p>15 mins</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="menu">
                    <div class="menu-container wrapper">
                        <ul>
                            {/* <li>Meal Deal</li> */}
                            {/* <li><a href="#sandwiches">Sandwiches</a></li>
                            <li>Drinks</li>
                            <li>Directions</li> */}
                        </ul>
                    </div>
                </section>

                <section class="item  wrapper">
                    <h2>Meal Deal</h2>
                    <div class="tile-container top-margin">
                        <div class="item-details">
                            <p>{cafe.deal.name}</p>
                            <p> £{cafe.deal.price}</p>
                        </div>
                        {/* <div class="item-picture">
                            <img src="assets/tuna-sandwich.png" alt="" />
                            <span class="box">Meal deal</span>
                        </div> */}
                    </div>

                    {/* <div class="tile-container">
                        <div class="item-details">
                            <p>Tuna</p>
                            <p> Tuna served on brown wholemeal </p>
                            <p> £4.00</p>
                        </div>
                        <div class="item-picture">
                            <img src="assets/tuna-sandwich.png" alt="" />
                        </div>
                    </div>

                    <div class="tile-container">
                        <div class="item-details">
                            <p>Tuna</p>
                            <p> Tuna served on brown wholemeal </p>
                            <p> £4.00</p>
                        </div>
                        <div class="item-picture">
                            <img src="assets/tuna-sandwich.png" alt="" />
                        </div>
                    </div>
                </section>

                <section class="item  wrapper">
                    <h2 id="sandwiches">Sandwiches</h2>
                    <div class="tile-container top-margin">
                        <div class="item-details">
                            <p>Tuna</p>
                            <p> Tuna served on brown wholemeal </p>
                            <p> £4.00</p>
                        </div>
                        <div class="item-picture">
                            <img src="assets/tuna-sandwich.png" alt="" />
                        </div>
                    </div>

                    <div class="tile-container">
                        <div class="item-details">
                            <p>Tuna</p>
                            <p> Tuna served on brown wholemeal </p>
                            <p> £4.00</p>
                        </div>
                        <div class="item-picture">
                            <img src="assets/tuna-sandwich.png" alt="" />
                        </div>
                    </div> */}


                </section>
            </>

        )
    }
    return null
}

export default CafeDisplayPage