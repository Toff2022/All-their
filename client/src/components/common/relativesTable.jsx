import React from 'react';
import Profession from './profession';
import Genus from './genus';

const RelativesTable = ({ onHandleDelete, _id, lastName, firstName, patronymic, lastNameBeforeMarriage, profession, age, alive, genus, birthDay, dethDay, adress, sex, bookmark, ...rest }) => {

    return (
        <tr key={_id} >
            <td>{lastName} {firstName} {patronymic} {lastNameBeforeMarriage}</td>
            <td>
                {profession.map((item) => (
                    <Profession
                        key={item._id}
                        {...item} />
                ))}
            </td>
            <td>{age}</td>
            <td>
                <span className="badge bg-secondary">
                    {alive}
                </span>
            </td>
            <td>
                {genus.map((item) => (
                    <Genus
                        key={item._id}
                        {...item}
                    />
                ))}
            </td>
            <td>{birthDay}</td>
            <td>{dethDay}</td>
            <td>{adress.city} {adress.street}</td>
            <td>{sex}</td>
            {/* <td>{bookmark}</td> */}
            <td>
                <button
                    className="btn btn-success"
                >
                    Редактировать
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => onHandleDelete(_id)}
                >
                    Удалить
                </button>
            </td>
        </tr>
    );
}

export default RelativesTable;