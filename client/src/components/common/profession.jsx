import React from 'react';

const Profession = ({ color, _id, name }) => {

    return (
        <span
            className={"badge m-1 bg-" + color}
            key={_id}
        >
            {name}
        </span>
    );
}

export default Profession;