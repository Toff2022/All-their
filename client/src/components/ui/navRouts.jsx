import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavRouts = ({ onActiveChange, id, to, text, active }) => {
    const handleClick = () => {
        onActiveChange(id);
    };

    const getClasses = () => {
        let classes = "nav-link";
        return (classes += active ? " active" : "");
    };
    return (
        <div className="nav-item ">
            <li className={getClasses()} onClick={handleClick}>
                {/* <a href={link}>{text}</a> */}
                <Link
                    style={{ color: "black" }}
                    // style={{ marginRight: spacing + 'em' }}
                    aria-current="page"
                    to={to}
                >
                    {text}
                </Link>
            </li>
        </div>
    );
};
NavRouts.propTypes = {
    to: PropTypes.string,
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onActiveChange: PropTypes.func
};
export default NavRouts;
