import React, { useState, useEffect } from 'react';
import GroupList from './groupList';
import RelativesTable from './relativesTable';
import API from '../../api';
import Pagination from './pagination';
import { paginate } from '../../utils/paginate';

const RelativesTableHead = ({ count, relatives, ...rest }) => {

    const [genus, setGenus] = useState();
    const [selectedGenus, setSelectrdGenus] = useState()
    const handleGenusSelect = (item) => {
        setSelectrdGenus(item)
    }
    useEffect(() => {
        API.genus.fetchAll().then((data) => setGenus(data))
    }, []);

    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 6
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const relativesCrop = paginate(relatives, currentPage, pageSize)
    // const filteredGenus = selectedGenus? Object.keys(genus).filter((gen) => gen.name === selectedGenus)
    // console.log("genus", genus);
    return (
        <>
            {genus &&
                <GroupList
                    selectedItem={selectedGenus}
                    items={genus}
                    onItemSelect={handleGenusSelect}
                />
            }
            {count > 0 && (
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
            )}
            <Pagination itemsCount={count} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage} />
        </>
    );
}

export default RelativesTableHead;