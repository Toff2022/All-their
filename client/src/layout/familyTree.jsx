import React, { useState } from "react";
// import { relatives } from "../api/fake.api/relatives.api";
// import { professions } from "../api/fake.api/professions.api";
import API from "../api";
// import { genus } from "../api/fake.api/genus.api";
// import Relatives from "../api/fake.api/relatives.api"

const FamilyTree = () => {

    // const relativesURL = "http://localhost:8080/api/relatives"

    const [relatives, setRelatives] = useState(API.relatives.fetchAll())
    const [professions, setProfessions] = useState(API.professions.fetchAll())
    const [genus, setGenus] = useState(API.genus.fetchAll())
    // console.log("relatives", relatives);
    // console.log("professions", professions);
    // console.log("genus", genus);
    const handleDelete = (relativeId) => {
        setRelatives(relatives.filter((relative) => relative._id !== relativeId))
    }

    const howMuchRelatives = (number) => {
        if (number === 0) return " У Вас не заведено ни одного родича!"
        if (number > 0) return `У Вас ${number} родичей!`
    }

    return (
        <>
            <div className="badge text-bg-success d-flex mt-5">
                <h3><span className="badge text-bg-success">
                    Список родственников
                </span></h3>

                <h4>
                    <span className={"badge " + (relatives.length > 0 ? "bg-primary" : "bg-danger")}
                    >
                        {howMuchRelatives(relatives.length)}
                    </span>
                </h4>
            </div>
            {relatives.length > 0 && (
                <table className="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> ФИО </th>
                            <th scope="col"> Профессия </th>
                            <th scope="col"> Возвраст </th>
                            <th scope="col"> Жив Ныне </th>
                            <th scope="col"> РОД </th>
                            <th scope="col"> День Рождения </th>
                            <th scope="col"> День Смерти </th>
                            <th scope="col"> Адрес </th>
                            <th scope="col"> Степень родства </th>
                            <th scope="col"> Кнопаньки </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            relatives.map((relative) => (
                                <tr key={relative._id}>
                                    <td>{relative.lastName} {relative.firstName} {relative.patronymic} {relative.lastNameBeforeMarriage}</td>
                                    <td>
                                        {relative.profession.map((item) => (
                                            <span className={"badge m-1 bg-" + item.color} key={item._id}>{item.name}</span>
                                        ))}
                                    </td>
                                    <td>{relative.age}</td>
                                    <td>
                                        <span className="badge bg-secondary">
                                            {relative.alive}
                                        </span>
                                    </td>
                                    <td>
                                        {relative.genus.map((item) => (
                                            <span className={"badge m-1 bg-" + item.color} key={item._id}>{item.name}</span>
                                        ))}
                                    </td>
                                    <td>{relative.birthDay}</td>
                                    <td>{relative.dethDay}</td>
                                    <td>{relative.adress.city} {relative.adress.street}</td>
                                    <td>{relative.bookmark}</td>
                                    <td>
                                        <button
                                            className="btn btn-success"
                                        >
                                            Редактировать
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(relative._id)}
                                        >
                                            Удалить
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            )
            }
        </>
    );
};

export default FamilyTree;
