import React from "react";
import PropTypes from "prop-types";
import RelativesTableHead from "./relativesTableHead";
import NewTableBody from "./newTableBody";

const Table = ({ onSort, selectedSort, columns, data, children }) => {
    return (
        <div className="main-table-container">
            <table className="table table-success table-striped m-2">
                {children || (
                    <>
                        <RelativesTableHead
                            onSort={onSort}
                            selectedSort={selectedSort}
                            columns={columns}
                        />
                        <NewTableBody {...{ columns, data }} />
                    </>
                )}
            </table>
        </div>
    );
};
Table.propTypes = {
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    columns: PropTypes.object,
    data: PropTypes.array,
    children: PropTypes.array
};
export default Table;
