import React from 'react';

const HowMuchRelatives = ({ number }) => {

    const howMuchRelatives = (number) => {
        if (number === 0) return " У Вас не заведено ни одного родича!"
        if (number > 0) return `У Вас ${number} родичей!`
    }
    return (
        <>
            <div className="badge d-flex mt-5">
                <h3>
                    <span className="badge bg-primary m-2">
                        Список родственников
                    </span>
                    <span className={"badge " + (number > 0 ? "bg-primary" : "bg-danger")}
                    >
                        {howMuchRelatives(number)}
                    </span>
                </h3>
            </div>
        </>
    )
}

export default HowMuchRelatives