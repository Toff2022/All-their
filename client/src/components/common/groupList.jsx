import React from 'react';
import PropTypes from "prop-types"

const GroupList = ({ items, valueProperty, contentProperty, elseProperty }) => {
    // console.log(Object.keys(items));
    return (
        <div className='list-group-container mb-3 ml-2'>
            <ul className="list-group list-group-horizontal">
                {Object.keys(items).map(item =>
                    <li key={items[item][valueProperty]} className="list-group-item">
                        <h4>
                            <span className={"badge m-1 bg-" + items[item][elseProperty]} >{items[item][contentProperty]}
                            </span>
                        </h4>
                    </li>
                )}
            </ul>
        </div>
    );
}

GroupList.propTypes = {
    items: PropTypes.object.isRequired,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    elseProperty: PropTypes.string.isRequired,
}
export default GroupList;