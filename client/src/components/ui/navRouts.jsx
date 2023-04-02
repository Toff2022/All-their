import React from "react";
import { Link } from "react-router-dom"

const NavRouts = (props) => {

    const handleClick = () => {
        props.onActiveChange(props.id)
    }

    const getClasses = () => {
        let classes = "nav-link"
        return (classes += props.active ? " active" : "")
    }
    return (
        <div className="nav-item ">
            <li className={getClasses()} onClick={handleClick}>
                {/* <a href={props.link}>{props.text}</a> */}
                <Link
                    aria-current="page"
                    to={props.to}
                >
                    {props.text}
                </Link>
            </li>
        </div>
    )
}

export default NavRouts;