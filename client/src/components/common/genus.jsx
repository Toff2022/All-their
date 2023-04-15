import React from "react";
import PropTypes from "prop-types";

const Genus = ({ _id, color, name }) => {
    return (
        <span
            className={"badge m-1 bg-" + color}
            key={_id}
        >
            {name}
        </span>
    );
};
Genus.propTypes = {
    _id: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
export default Genus;
