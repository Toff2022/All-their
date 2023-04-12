import React, { useState, useEffect } from 'react';
import GroupList from './groupList';
import RelativesTable from './relativesTable';
import API from '../../api';

const RelativesTableHead = ({ number, relatives, ...rest }) => {
    const [genus, setGenus] = useState();

    const handleGenusSelect = (params) => {
        console.log("params", params);
    }
    useEffect(() => {
        API.genus.fetchAll().then((data) => setGenus(data))
    }, []);

    return (
        <>
            {genus &&
                <GroupList
                    items={genus}
                    onItemSelect={handleGenusSelect}
                    valueProperty="_id"
                    contentProperty='name'
                    elseProperty='color'
                />
            }
            {number > 0 && (
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
                        {relatives.map((relative) => (
                            <RelativesTable
                                key={relative._id}
                                {...rest}
                                {...relative}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default RelativesTableHead;