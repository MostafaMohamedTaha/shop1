import React from 'react'
import PropTypes from 'prop-types';
const List = ({ items=[], category }) => {
    return (
        <div className='flex justify-center gap-3'>
            {category}:[{items.map(x => (<li key={x.id}>{x.name}:<b>{x.category}</b> | </li>))}]
        </div>
    )
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        category: PropTypes.string,

    }))
}
export default List
