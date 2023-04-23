import React from "react";
import PropTypes from "prop-types";

const HowMuchRelatives = ({ relatives }) => {
    const maxCount = relatives.length;
    const howMuchRelatives = (maxCount) => {
        if (maxCount === 0) return " У Вас не заведено ни одного родича!";
        if (maxCount > 0) return `У Вас ${maxCount} родичей!`;
    };
    return (
        <>
            <div className="badge d-flex mt-5">
                <h3>
                    <span className="badge bg-primary m-2">
                        Список родственников
                    </span>
                    <span className={"badge " + (maxCount > 0 ? "bg-primary" : "bg-danger")}
                    >
                        {howMuchRelatives(maxCount)}
                    </span>
                </h3>
            </div>
        </>
    );
};

HowMuchRelatives.propTypes = {
    maxCount: PropTypes.number,
    relatives: PropTypes.array
};
export default HowMuchRelatives;
