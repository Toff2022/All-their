import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import RelativesTable from "./relativesTable";
import API from "../../api";
import Pagination from "./pagination";
import { paginate } from "../../utils/paginate";

const RelativesTableHead = ({ maxCount, relatives, ...rest }) => {
    const [genus, setGenus] = useState();
    const [selectedGenus, setSelectrdGenus] = useState();
    const handleGenusSelect = (item) => {
        // console.log("item", item);
        setSelectrdGenus(item.name);
    };
    useEffect(() => {
        API.genus.fetchAll().then((data) => setGenus(data));
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    // console.log("selectedGenus", selectedGenus);
    const filteredGenus = selectedGenus ? relatives.filter((relative) => relative.genus[0].name === selectedGenus) : relatives;
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedGenus]);
    const relativesCrop = paginate(filteredGenus, currentPage, pageSize);
    // console.log("filteredGenus", filteredGenus);
    const genusCount = filteredGenus.length;
    const clearFilter = () => {
        setSelectrdGenus();
    };
    return (
        <>
            {genus &&
                <>
                    <GroupList
                        selectedItem={selectedGenus}
                        items={genus}
                        onItemSelect={handleGenusSelect}
                    />
                    <button className="btn btn-secondary m-1" onClick={clearFilter}>Сбросить фильтр</button>
                </>
            };
            {maxCount > 0 && (
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
                            <RelativesTable
                                key={relative._id}
                                {...rest}
                                {...relative}
                            />
                        ))}
                    </tbody>
                </table>
            )};
            <div className="d-flex justify-content-center">
                <Pagination itemsCount={genusCount} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage} />
            </div>
        </>
    );
};

RelativesTableHead.propTypes = {
    maxCount: PropTypes.number.isRequired,
    genusCount: PropTypes.number,
    relatives: PropTypes.array.isRequired
};

export default RelativesTableHead;
