import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import GroupList from "../common/groupList";
import Pagination from "../common/pagination";
import Table from "../common/table";
import { paginate } from "../../utils/paginate";
import _ from "lodash";
import Genus from "../common/table/genus";
import { Link } from "react-router-dom";

const RelativesMainTable = ({ relatives, genus, professions, onHandleDelete, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedGenus, setSelectrdGenus] = useState();
    const [sortBy, setSortBy] = useState({ path: "lastName", order: "asc" });
    const handleGenusSelect = (item) => {
        setSelectrdGenus(item.name);
    };
    const handleSort = (item) => {
        setSortBy(item);
    };
    const pageSize = 10;
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const filteredGenus = selectedGenus ? relatives.filter((relative) =>
        JSON.stringify(relative.genus[0].name) === JSON.stringify(selectedGenus)) : relatives;

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedGenus]);

    const genusCount = filteredGenus.length;

    const sortedGenus = _.orderBy(filteredGenus, [sortBy.path], [sortBy.order]);

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

    const columns = {
        name: {
            path: "lastName",
            name: "ФИО",
            component: (relativ) => (
                <Link to={`/relativesPage/${relativ._id}`}>
                    {relativ.lastName} {relativ.firstName} {relativ.patronymic}
                </Link>
            )
        },
        profession: {
            path: "profession.name",
            name: "Профессия"
        },
        age: { path: "age", name: "Возвраст" },
        alive: { path: "alive", name: "Жив Ныне" },
        genus: {
            component: (relative) => (
                <Genus genus={relative.genus} />
            ),
            name: "РОД"
        },
        birthDay: { path: "birthDay", name: "День Рождения" },
        dathDay: { path: "dethDay", name: "День Смерти" },
        adress: { path: "adress.city", name: "Адрес" },
        sex: { path: "sex", name: "Пол" },
        buttons: {
            name: " Кнопаньки",
            component: (genus) => (
                <button
                    className="btn btn-danger"
                    onClick={() => onHandleDelete(genus._id)}
                >
                    <span >
                        Del <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard2-x-fill" viewBox="0 0 16 16">
                            <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                            <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 1 1 .708-.708L8 8.293Z" />
                        </svg>
                    </span>
                </button>
            )
        }
    };
    return (
        <div>
            {genus &&
                <div className="group-list-container">
                    <GroupList
                        selectedItem={selectedGenus}
                        items={genus}
                        onItemSelect={handleGenusSelect}
                    />
                    <button
                        className="btn btn-secondary m-1"
                        onClick={clearFilter}>
                        Сбросить фильтр <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                        </svg>
                    </button>
                </div>
            };
            {maxCount > 0 && (
                <>
                    <Table onSort={handleSort}
                        selectedSort={sortBy}
                        columns={columns}
                        data={relativesCrop}
                    />
                </>
            )
            };
            <div className="d-flex justify-content-center">
                <Pagination itemsCount={genusCount} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage} />
            </div>
        </div>
    );
};

RelativesMainTable.propTypes = {
    maxCount: PropTypes.number,
    genus: PropTypes.object,
    professions: PropTypes.array,
    genusCount: PropTypes.number,
    relatives: PropTypes.array.isRequired,
    onHandleDelete: PropTypes.func,
    relativesCrop: PropTypes.array
};

export default RelativesMainTable;
