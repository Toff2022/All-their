import React from "react";
import PropTypes from "prop-types";

const RadioField = ({ options, name, onChange, value, label }) => {
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            {options.map((option) => (
                <div
                    key={option.name + "_" + option.value}
                    className="form-check form-check-inline"
                >
                    <input
                        className="form-check-input"
                        type="radio"
                        name={name}
                        id={option.name + "_" + option.value}
                        checked={option.value === value}
                        value={option.value}
                        onChange={onChange}
                    />
                    <label
                        key={option.name + "_" + option.value}
                        className="form-check-label"
                        htmlFor={option.name + "_" + option.value}
                    >
                        {option.name}
                    </label>
                </div>
            ))}
        </div>
    );
};

RadioField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    value: PropTypes.string,
    onChange: PropTypes.func
};
export default RadioField;
