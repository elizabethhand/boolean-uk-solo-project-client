import React from "react"

function CategoryTile({ category }) {
    return (
        <>
            <div className="category-tile"> {category.name}</div>
        </>
    )
}

export default CategoryTile