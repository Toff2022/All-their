import React from "react";

const NavRouts = (props) => {

    const handleClick = () => {
        props.onActiveChange(props.id)
    }

    const getClasses = () => {
        let classes = "nav-link"
        return (classes += props.active ? " active" : "")
    }
    return (
        <div>
            <li className={getClasses()} onClick={handleClick}>
                <a href={props.link}>{props.text}</a>
            </li>
        </div>
    )
}

export default NavRouts;