import React from "react";
import PropTypes from "prop-types";

const GroupList = ({ items, valueProperty, contentProperty, colorProperty, onItemSelect, selectedItem }) => {
    if (!Array.isArray(items)) {
        return (
            <div className='list-group-container mb-3'>
                <ul className="list-group list-group-horizontal">
                    {Object.keys(items).map(item =>
                        <li
                            key={items[item][valueProperty]}
                            className={"list-group-item" + (items[item] === selectedItem ? " active" : "")}
                            onClick={() => onItemSelect(items[item])}
                            role="button"
                        >
                            <h4>
                                <span className={"badge m-1 bg-" + items[item][colorProperty]} >{items[item][contentProperty]}
                                </span>
                            </h4>
                        </li>
                    )}
                </ul>
            </div>
        );
    };
    return (
        <div className='list-group-container mb-3 ml-2'>
            <ul className="list-group list-group-horizontal">
                {items.map(item =>
                    <li
                        key={item[valueProperty]}
                        className={"list-group-item" + (item === selectedItem ? " active" : "")}
                        onClick={() => onItemSelect(item)}
                        role="button"
                    >
                        <h4>
                            <span className={"badge m-1 bg-" + item[colorProperty]} >{item[contentProperty]}
                            </span>
                        </h4>
                    </li>
                )}
            </ul>
        </div>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name",
    colorProperty: "color"
};
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    colorProperty: PropTypes.string.isRequired,
    selectedItem: PropTypes.string,
    onItemSelect: PropTypes.func
};
export default GroupList;
