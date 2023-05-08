import React from "react";
import PropTypes from "prop-types";

const RelativesTableHead = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort(({ ...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc" }));
        } else {
            onSort({ path: item, order: "asc" });
        };
    };
    const renderSortArrow = (selectedSort, currentPath) => {
        console.log("current", currentPath);

        if (selectedSort.path === currentPath) {
            if (selectedSort.order === "asc") {
                return <i className="bi bi-caret-down-fill"></i>;
            } else {
                return <i className="bi bi-caret-up-fill"></i>;
            }
        }
        return <i className="bi bi-check-circle-fill"></i>;
    };
    console.log("path", selectedSort.path);
    console.log("order", selectedSort.order);
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={columns[column].path
                            ? () => handleSort(columns[column].path)
                            : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        {renderSortArrow(selectedSort, columns[column].path)}
                    </th>
                ))}
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
