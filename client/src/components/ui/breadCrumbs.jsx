import React from "react";

const BreadCrumbs = ({ page, onGoMain }) => {
    const isMainPage = page.id === "main"
    const mainClasses = "breadcrumb-item " + (isMainPage ? "  active" : "")

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
    )
}

export default BreadCrumbs;