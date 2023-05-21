import React, { useState } from "react";
import NavLink from "./navLink";
import BreadCrumbs from "./breadCrumbs";
import HelloContent from "../common/helloContent";

const NavBar = () => {
    const [menuItems, setMenuItems] = useState([
        { id: "main", text: "Главная", to: "/", active: true }, // добавляем пункт active
        { id: "blog", text: "Блог", to: "/blogPage", active: false },
        { id: "photoAlbum", text: "Фотоальбом", to: "/photoAlbum", active: false },
        { id: "relativesPage", text: "Семейное Древо", to: "/RelativesPage", active: false },
        { id: "login", text: "Логин", to: "/loginPage", active: false }
    ]);
    const currentActivePage = menuItems.find((item) => item.active); //  возвращает эл-т, у к-го active=true
    const handleItemClick = (id) => {
        const newMenuItems = menuItems.map((item) => ({ // по клику пересоздаём массив
            ...item,
            // аналог выражения item.id === id ? true : false
            active: item.id === id
        }));
        setMenuItems(newMenuItems);
    };
    // устанавливает свойство active для main
    const handleSetMainActive = () => {
        const newMenuItems = menuItems.map((item) => ({
            ...item,
            active: item.id === "main"
        }));
        setMenuItems(newMenuItems);
    };

    return (
        // flex-nowrap
        <main className="d-flex inline-block" style={{ height: "36vh" }}>
            <div
                className="d-flex inline-block flex-shrink-0 p-3 bg-light"
                style={{ width: "20vh" }}
            >
                <hr />
                <NavLink
                    menuItems={menuItems}
                    onItemClick={handleItemClick}
                />
            </div >
            <div className="container-bred-crumbs p-4">
                <div>
                    <BreadCrumbs
                        page={currentActivePage}
                        onGoMain={handleSetMainActive}
                    />
                </div>
                <h1 className="container-hello-content h3"><HelloContent /></h1>
            </div>
        </main>
    );
};
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
