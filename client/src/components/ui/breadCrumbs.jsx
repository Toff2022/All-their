import React from "react";
import PropTypes from "prop-types";

const BreadCrumbs = ({ page, onGoMain }) => {
    const isMainPage = page.id === "main";
    const mainClasses = "breadcrumb-item " + (isMainPage ? "  active" : "");

    return (
        <nav>
            <ol className="breadcrumb">
                <li
                    className={mainClasses}
                    onClick={onGoMain}
                >
                    ГЛАВНАЯ
                </li>
                {!isMainPage && (
                    <li className="breadcrumb-item active" >
                        {page.text}
                    </li>
                )}
            </ol>
        </nav>
    );
};
BreadCrumbs.propTypes = {
    onGoMain: PropTypes.func,
    page: PropTypes.string
};
export default BreadCrumbs;
