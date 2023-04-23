import React from "react";
import Profession from "./profession";
import Genus from "./genus";
import PropTypes from "prop-types";

const RelativesTableBody = ({
    onHandleDelete,
    _id,
    lastName,
    firstName,
    patronymic,
    lastNameBeforeMarriage,
    profession,
    age,
    alive,
    genus,
    birthDay,
    dethDay,
    adress,
    sex,
    ...rest
}) => {
    return (
        <tbody>
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
        </tbody>
    );
};
RelativesTableBody.propTypes = {
    _id: PropTypes.string,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    patronymic: PropTypes.string,
    lastNameBeforeMarriage: PropTypes.string,
    age: PropTypes.number,
    profession: PropTypes.array,
    alive: PropTypes.string,
    genus: PropTypes.array,
    birthDay: PropTypes.string,
    dethDay: PropTypes.string,
    adress: PropTypes.object,
    sex: PropTypes.string,
    onHandleDelete: PropTypes.func
};
export default RelativesTableBody;