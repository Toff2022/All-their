import React from 'react';

const Genus = ({ _id, color, name }) => {
    return (
        <span
            className={"badge m-1 bg-" + color}
            key={_id}
        >
            {name}
        </span>
    );
}

export default Genus;