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
    console.log("relatives", relatives);
    console.log("professions", professions);
    console.log("genus", genus);

    // const getRelatives = () => {
    //     const relatives = fetch(relativesURL, {
    //         method: "GET",
    //     })
    //     relatives
    //         .then((response) => {
    //             const result = response.json()
    //             return result
    //         })
    //         .catch((error) => {
    //             console.log("error", error);
    //         })
    // }
    // getRelatives();

    return (
        <>
            <h3>Список родственников</h3>
            {relatives.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"> ФИО </th>
                            <th scope="col"> Профессия </th>
                            <th scope="col"> Возвраст </th>
                            <th scope="col"> Здравствует/Почил </th>
                            <th scope="col"> РОД </th>
                            <th scope="col"> День Рождения </th>
                            <th scope="col"> День Смерти </th>
                            <th scope="col"> Адрес </th>
                            <th scope="col"> Степень родства </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            relatives.map((relative) => (
                                <tr key={relative._id}>
                                    <td>{relative.lastName} {relative.firstName} {relative.patronymic} {(relative.lastNameBeforeMarriage)}</td>
                                    <td >
                                        {relative.profession.map((item) => (
                                            <span className={"badge m-1 bg-" + item.color} key={item._id}>{item.name}</span>
                                        ))}
                                    </td>
                                    <td>{relative.age}</td>
                                    <td>{relative.alive}</td>
                                    {/* <td>{relative.genus}</td> */}
                                    <td>{relative.birthDay}</td>
                                    <td>{relative.dethDay}</td>
                                    {/* <td>{relative.adress}</td> */}
                                    <td>{relative.bookmark}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                        >
                                            Удалить
                                        </button>
                                        <button
                                            className="btn btn-success"
                                        >
                                            Редактировать
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
