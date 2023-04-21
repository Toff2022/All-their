import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import GroupList from "./groupList";
// import API from "../../api";
import Pagination from "./pagination";
import { paginate } from "../../utils/paginate";
import RelativesTableHead from "./relativesTableHead";
import _ from "lodash";

const RelativesMainTable = ({ relatives, genus, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedGenus, setSelectrdGenus] = useState();
    const [sortBy, setSortBy] = useState({ iter: "lastName", order: "asc" });
    const handleGenusSelect = (item) => {
        // console.log("item", item);
        setSelectrdGenus(item.name);
    };
    const handleSort = (item) => {
        setSortBy(item);
    };
    const pageSize = 10;
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    // console.log("selectedGenus", selectedGenus);
    const filteredGenus = selectedGenus ? relatives.filter((relative) =>
        JSON.stringify(relative.genus[0].name) === JSON.stringify(selectedGenus)) : relatives;

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedGenus]);

    // console.log("filteredGenus", filteredGenus);
    const genusCount = filteredGenus.length;

    const sortedGenus = _.orderBy(filteredGenus, [sortBy.iter], [sortBy.order]);

    const clearFilter = () => {
        setSelectrdGenus();
    };
    const relativesCrop = paginate(sortedGenus, currentPage, pageSize);
    useEffect(() => {
        if (currentPage > Math.ceil(filteredGenus.length / pageSize) &&
            currentPage > 1
        ) {
            setCurrentPage(currentPage - 1);
        };
    }, [relatives]);
    const maxCount = Object.keys(relatives).length;

    return (
        <div>
            {genus &&
                <div className="group-list-container">
                    <GroupList
                        selectedItem={selectedGenus}
                        items={genus}
                        onItemSelect={handleGenusSelect}
                    />
                    <button className="btn btn-secondary m-1" onClick={clearFilter}>Сбросить фильтр</button>
                </div>
            };
            {maxCount > 0 && (
                <RelativesTableHead
                    relativesCrop={relativesCrop}
                    relatives={relatives}
                    onSort={handleSort}
                    currrentSort={sortBy}
                    {...rest} />
            )};
            <div className="d-flex justify-content-center">
                <Pagination itemsCount={genusCount} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage} />
            </div>
        </div>
    );
};

RelativesMainTable.propTypes = {
    maxCount: PropTypes.number,
    genus: PropTypes.array,
    genusCount: PropTypes.number,
    relatives: PropTypes.array.isRequired
};

export default RelativesMainTable;
