import React from "react"

function DealTile({ deal }) {
    return (
        <>
            <div className="deal-tile"> {deal.name}</div>
        </>
    )
}

export default DealTile