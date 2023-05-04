import PropTypes from "prop-types";
import React from "react";

const Profession = ({ color, _id, name }) => {
    return (
        <span
            className={"badge m-1 bg-" + color}
            key={_id}
        >
            {name}
        </span>
    );
};
Profession.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string,
    _id: PropTypes.string
};
export default Profession;
