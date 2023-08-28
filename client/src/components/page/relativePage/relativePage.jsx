import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../../../api";
import Genus from "../../common/table/genus";
import { useHistory } from "react-router-dom";

const RelativePage = ({ relativeId }) => {
    const [relative, setRelative] = useState();
    // console.log("relative", relative);
    const history = useHistory();
    useEffect(() => {
        API.relatives.getById(relativeId).then(data => setRelative(data));
    }, []);
    const handleClick = () => {
        history.push("/relatives");
    };

    const handleEdit = () => {
        history.push(`/relatives/${relativeId}/edit`);
    };
    if (relative) {
        return (
            <div className="relativePage-container m-2">
                <h1>{relative.lastName} {relative.firstName} {relative.patronymic}</h1>
                <h2>Профессия: {relative.profession.name}</h2>
                <Genus genus={relative.genus} />
                <h3>Возвраст: {relative.age}</h3>
                {relative.lastNameBeforeMarriage &&
                    <h3> Девичья фамилия: {relative.lastNameBeforeMarriage}</h3>
                }
                <h3> Адрес: {relative.adress.city} {relative.adress.street}</h3>
                <h3>Пол: {relative.sex}</h3>
                <h3>День рождения: {relative.birthDay} | День смерти: {relative.dethDay}</h3>
                <button className="btn btn-primary " onClick={handleClick}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
                </svg> Назад</button>
                <button className="btn btn-warning " onClick={handleEdit}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg> Edit</button>
            </div>
        );
    } else {
        return <h1>Loading..Загружаю..</h1>;
    };
};
RelativePage.propTypes = {
    relativeId: PropTypes.string.isRequired
};

export default RelativePage;
