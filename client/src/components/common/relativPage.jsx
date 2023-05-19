import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../../api";
import GenusList from "./table/genusList";
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
            <div className="relativPage-container mt-5">
                <h1>{relativ.lastName} {relativ.firstName} {relativ.patronymic}</h1>
                <h2>Профессия: {relativ.profession.name}</h2>
                <GenusList genus={relativ.genus} />
                <h3>Возвраст: {relativ.age}</h3>
                {relativ.lastNameBeforeMarriage &&
                    <h3> Девичья фамилия: {relativ.lastNameBeforeMarriage}</h3>
                }
                <h3> Адрес: {relativ.adress.city} {relativ.adress.street}</h3>
                <h3>Пол: {relativ.sex}</h3>
                <h3>День рождения: {relativ.birthDay} | День смерти: {relativ.dethDay}</h3>
                <button className="btn btn-primary " onClick={handleClick}>Назад</button>
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
