import React from "react"


function CafeDisplayPage() {

    return (
        <>

            <section class="cafe-info">
                <div class="cafe-container wrapper">
                    <div class="cafe-details">
                        <span class="box">Meal deal</span>
                        <h1>Cafe name</h1>
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
                        <li>Menu</li>
                        <li><a href="#sandwiches">Sandwiches</a></li>
                        <li>Drinks</li>
                        <li>Directions</li>
                    </ul>
                </div>
            </section>

            <section class="item  wrapper">
                <h2>Menu</h2>
                <div class="tile-container top-margin">
                    <div class="item-details">
                        <p>Tuna</p>
                        <p> Tuna served on brown wholemeal </p>
                        <p> £4.00</p>
                    </div>
                    <div class="item-picture">
                        <img src="assets/tuna-sandwich.png" alt="" />
                        <span class="box">Meal deal</span>
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
        </>

    )
}

export default CafeDisplayPage