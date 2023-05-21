import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../../../api";
// import GenusList from "../../common/table/genusList";
import Genus from "../../common/table/genus";
import { useHistory } from "react-router-dom";

const RelativPage = ({ relativId }) => {
    const [relativ, setRelativ] = useState();
    const history = useHistory();
    useEffect(() => {
        API.relatives.getById(relativId).then(data => setRelativ(data));
    });
    const handleClick = () => {
        history.push("/relativesPage");
    };
    if (relativ) {
        return (
            <div className="relativPage-container m-2">
                <h1>{relativ.lastName} {relativ.firstName} {relativ.patronymic}</h1>
                <h2>Профессия: {relativ.profession.name}</h2>
                <Genus genus={relativ.genus} />
                <h3>Возвраст: {relativ.age}</h3>
                {relativ.lastNameBeforeMarriage &&
                    <h3> Девичья фамилия: {relativ.lastNameBeforeMarriage}</h3>
                }
                <h3> Адрес: {relativ.adress.city} {relativ.adress.street}</h3>
                <h3>Пол: {relativ.sex}</h3>
                <h3>День рождения: {relativ.birthDay} | День смерти: {relativ.dethDay}</h3>
                <button className="btn btn-primary " onClick={handleClick}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
                </svg> Назад</button>
            </div>
        );
    } else {
        return <h1>Loading..Загружаю..</h1>;
    };
};
RelativPage.propTypes = {
    relativId: PropTypes.string.isRequired
};

export default RelativPage;
