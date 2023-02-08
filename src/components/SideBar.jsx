import React from 'react'

import { categories } from '../utils/constants'
const SideBar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <>{categories.map((category) => (
            <div className={category.name === selectedCategory ? "category-btn btn-selected" : "category-btn"}
                key={category.name}
                onClick={() => { setSelectedCategory(category.name) }}
            >
                <span className='icon'> {category.icon}</span>
                <span>{category.name}</span>
            </div>
        ))}
        </>
    )
}

export default SideBar