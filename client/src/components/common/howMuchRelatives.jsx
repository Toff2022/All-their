import React from 'react';

const HowMuchRelatives = ({ number }) => {

    const howMuchRelatives = (number) => {
        if (number === 0) return " У Вас не заведено ни одного родича!"
        if (number > 0) return `У Вас ${number} родичей!`
    }
    return (
        <>
            <div className="badge text-bg-success d-flex mt-5">
                <h3><span className="badge text-bg-success">
                    Список родственников
                </span></h3>
                <h4>
                    <span className={"badge " + (number > 0 ? "bg-primary" : "bg-danger")}
                    >
                        {howMuchRelatives(number)}
                    </span>
                </h4>
            </div>
        </>
    )
}

export default HowMuchRelatives