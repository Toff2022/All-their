import React from "react";
import RelativesTableBody from "./relativesTableBody";
import PropTypes from "prop-types"

const RelativesTableHead = ({ relativesCrop, relatives, onSort, currrentSort, ...rest }) => {
    const handleSort = (item) => {
        if (currrentSort.iter === item) {
            onSort(({ ...currrentSort, order: currrentSort.order === "asc" ? "desc" : "asc" }));
        } else {
            onSort({ iter: item, order: "asc" })
        }
    };
    return (
        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th onClick={() => handleSort("lastName")} scope="col"> ФИО </th>
                    <th onClick={() => handleSort("profession.name")} scope="col"> Профессия </th>
                    <th onClick={() => handleSort("age")} scope="col"> Возвраст </th>
                    <th onClick={() => handleSort("alive")} scope="col"> Жив Ныне </th>
                    <th scope="col"> РОД </th>
                    <th onClick={() => handleSort("birthDay")} scope="col"> День Рождения </th>
                    <th scope="col"> День Смерти </th>
                    <th scope="col"> Адрес </th>
                    <th onClick={() => handleSort("sex")} scope="col"> Пол </th>
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
    relatives: PropTypes.array,
    onSort: PropTypes.func,
    currrentSort: PropTypes.object

}
export default RelativesTableHead;
