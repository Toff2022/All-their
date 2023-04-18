import React from "react";
import PropTypes from "prop-types";
// import { genusCount } from "./relativesTableHead";

const HowMuchRelatives = ({ maxCount }) => {
    // console.log("genusCount", genusCount);
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
                    { }
                </h3>
            </div>
        </>
    );
};

HowMuchRelatives.propTypes = {
    maxCount: PropTypes.number
};
export default HowMuchRelatives;
