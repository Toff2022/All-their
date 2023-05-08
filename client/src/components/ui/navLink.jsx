import React from "react";
import PropTypes from "prop-types";
import NavRouts from "./navRouts";
// import { Link } from "react-router-dom";

const NavLink = ({ menuItems, onItemClick }) => {
    return (
        <div>
            <ul className="nav nav-pills flex-column mb-auto">
                {menuItems.map((item) => (
                    <NavRouts
                        key={item.id}
                        {...item}
                        onActiveChange={onItemClick}
                    />
                ))}
            </ul>
        </div>
    );
};
NavLink.propTypes = {
    onItemClick: PropTypes.func,
    menuItems: PropTypes.array
};
export default NavLink;
