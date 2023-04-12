import React from 'react';
import RelativesTable from './relativesTable';

const RelativesTableHead = ({ number, relatives, ...rest }) => {

    return (
        <>
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
                            <th scope="col"> Степень родства </th>
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