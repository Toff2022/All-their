import React from "react";
import RelativesTableBody from "./relativesTableBody";
import PropTypes from "prop-types"

const RelativesTableHead = ({ relativesCrop, relatives, ...rest }) => {
    return (
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
                    <th scope="col"> Пол </th>
                    <th scope="col"> Кнопаньки </th>
                </tr>
            </thead>
            <tbody>
                {relativesCrop.map((relative) => (
                    <RelativesTableBody
                        key={relative._id}
                        {...rest}
                        {...relative}
                    />
                ))}
            </tbody>
        </table>);
}

RelativesTableHead.propTypes = {
    relatives: PropTypes.array
}
export default RelativesTableHead;
