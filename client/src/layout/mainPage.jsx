import React from "react";
// import { Link } from "react-router-dom";
// import { } from "../../images"

const MainPage = () => {
    const handleClick = () => {
        console.log("нечто");
    };
    return (

        <div className="main-container" >
            <img src="d9.jpg" alt="Great Oack" />

            <h1>MainPage Hello!</h1>
            <h2>описание сайта</h2><h2>описание сайта</h2>
            <button className="btn btn-primary" onClick={handleClick}>
                Войти/Зарегистрироваться
            </button>
            <a href="/loginPage">Войти/Зарегистрироваться</a>

        </div>
    );
};
/* <Link to={"/loginPage"}></Link>; */
export default MainPage;
