import React from "react";
import PropTypes from "prop-types";
import Genus from "./genus";

const GenusList = ({ genus }) => {
    return (
        <>
            {Object.values(genus).map((item) => (
                <Genus
                    key={item._id}
                    {...item}
                />
            ))}
        </>
    );
};
GenusList.propTypes = {
    genus: PropTypes.array
};
export default GenusList;
