import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    console.log("pageCount", pageCount);
    console.log("itemsCount", itemsCount);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map((page) =>
                    <li
                        className={"page-item " + (page === currentPage ? "active" : "")}
                        key={"page_" + page}
                    >
                        <a className="page-link" onClick={() => onPageChange(page)} role="button">{page}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func
};
export default Pagination;
