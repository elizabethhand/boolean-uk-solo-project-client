import React from "react"

function Homepage() {
    return (
        <main className="homepage">
            <div className="homepage-container">
                <div className="map-container">
                    <div className="map"> Map will go here</div>
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