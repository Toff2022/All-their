import React from "react";
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
    )
}

export default NavLink;