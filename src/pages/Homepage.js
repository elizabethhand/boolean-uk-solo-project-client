import React from "react"

function Homepage() {
    return (
        <main>
            <div> Map will go here</div>
            <div className="categories">
                <div className="category-tile"> Breakfast</div>
                <div className="category-tile"> Juice</div>
                <div className="category-tile"> American</div>
                <div className="category-tile"> Coffee</div>
            </div>
            <div className="best-deals">
                <h1> Best Deals</h1>
                <div className="deal-tile"> Deal</div>
                <div className="deal-tile"> Deal</div>
                <div className="deal-tile"> Deal</div>
                <div className="deal-tile"> Deal</div>
            </div>
        </main>
    )
}

export default Homepage;