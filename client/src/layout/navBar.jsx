import React from "react";
import { useState } from "react";
import NavLink from "../components/ui/navLink";
import BreadCrumbs from "../components/ui/breadCrumbs";

const NavBar = () => {

    const [menuItems, setMenuItems] = useState([
        { id: "main", text: "Главная", active: true, }, //добавляем пункт active
        { id: "blog", text: "Блог", active: false, },
        { id: "login", text: "Логин", active: false, },
        { id: "familyTree", text: "Семейное Древо", active: false, },
    ])

    const currentActivePage = menuItems.find((item) => item.active) //возвращает эл-т, у к-го active=true
    // console.log("currentActivePage", currentActivePage);

    const handleItemClick = (id) => {
        console.log("itemId", id)
        //по клику пересоздаём массив 
        const newMenuItems = menuItems.map((item) => ({
            ...item,
            //аналог выражения item.id === id ? true : false
            active: item.id === id
        }))
        setMenuItems(newMenuItems)

    }
    // устанавливает свойство active для main
    const handleSetMainActive = () => {
        const newMenuItems = menuItems.map((item) => ({
            ...item,
            active: item.id === "main"
        }))
        setMenuItems(newMenuItems)
    }

    return (
        <main className="d-flex flex-nowrap" style={{ height: "100vh" }}>
            <div
                className="d-flex flex-column flex-shrink-0 p-3 bg-light"
                style={{ width: "280px" }}
            >

                <hr />

                <NavLink
                    menuItems={menuItems}
                    onItemClick={handleItemClick}
                />
            </div >
            <div className="p-4">
                <div>
                    <BreadCrumbs
                        page={currentActivePage}
                        onGoMain={handleSetMainActive}
                    />
                </div>
                <h1 className="h3">Контент</h1>
            </div>
        </main>
    )
}
// <div className="nav-bar" >
//     <ul className="nav nav-pills nav-fill nav-justified">
//         <li className="nav-item">
//             <Link
//                 className={classes}
//                 id="mainPage"
//                 // activeClassName={"nav-link-selected"}
//                 // onClick={handleClick}
//                 aria-current="page"
//                 to="/"
//             >
//                 MainPage
//             </Link>
//         </li>
//         <li className="nav-item">
//             <Link
//                 // onClick={handleClick}
//                 className={classes}
//                 id="blogPage"
//                 // activeClassName={"nav-link-selected"}
//                 aria-current="page"
//                 to="/blogPage"
//             >
//                 Blog
//             </Link>
//         </li>
//         <li className="nav-item">
//             <Link
//                 // onClick={handleClick}
//                 className={classes}
//                 id="loginPage"
//                 // activeClassName={"nav-link-selected"}
//                 to="/loginPage">
//                 Login
//             </Link>
//         </li>
//         <li className="nav-item">
//             <Link
//                 // onClick={handleClick}
//                 className={classes}
//                 id="familyTree"
//                 // activeClassName={"nav-link-active"}
//                 to="/familyTree">
//                 Family Tree
//             </Link>
//         </li>
//     </ul>
// </div>
//     );
// };

export default NavBar;
