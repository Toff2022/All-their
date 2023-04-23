import React from "react";
import PropTypes from "prop-types";

const RelativesTableHead = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.iter === item) {
            onSort(({ ...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc" }));
        } else {
            onSort({ iter: item, order: "asc" });
        };
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={() => handleSort(columns[column].iter)}
                        scope="col"
                    >
                        {columns[column].name}
                    </th>
                ))}

                {/* <th onClick={() => handleSort("profession.name")} scope="col"> Профессия </th>
                <th onClick={() => handleSort("age")} scope="col"> Возвраст </th>
                <th onClick={() => handleSort("alive")} scope="col"> Жив Ныне </th>
                <th scope="col"> РОД </th>
                <th onClick={() => handleSort("birthDay")} scope="col"> День Рождения </th>
                <th scope="col"> День Смерти </th>
                <th scope="col"> Адрес </th>
                <th onClick={() => handleSort("sex")} scope="col"> Пол </th>
                <th scope="col"> Кнопаньки </th> */}
            </tr>
        </thead>
    );
};

RelativesTableHead.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};
export default RelativesTableHead;
