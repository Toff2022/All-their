import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import API from "../../../api";
import { validator } from "../../../utils/validator";
// import { relatives } from "../../../api/fake.api/relatives.api";

const EditRelativePage = () => {
    const { relativeId } = useParams();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        patronymic: "",
        lastNameBeforeMarriage: "",
        profession: "",
        sex: "",
        genus: []
    });
    const [professions, setProfessions] = useState([]);
    const [genus, setGenus] = useState([]);
    const [errors, setErrors] = useState({});

    const getProfessionById = (id) => {
        for (const prof of professions) {
            if (prof.value === id) {
                return { _id: prof.value, name: prof.label };
            }
        }
    };
    const getGenus = (elements) => {
        const genusArray = [];
        for (const elem of elements) {
            for (const gen in genus) {
                if (elem.value === genus[gen].value) {
                    genusArray.push({
                        _id: genus[gen].value,
                        name: genus[gen].label,
                        color: genus[gen].color
                    });
                }
            }
        }
        return genusArray;
    };
    console.log("genus", genus);
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const { profession, genus } = data;
        API.relatives.update(relativeId, {
            ...data,
            profession: getProfessionById(profession),
            genus: getGenus(genus)
        })
            .then((data) => history.push(`/relatives/${data._id}`));
    };
    const transformData = (data) => {
        return data.map((gen) => ({ label: gen.name, value: gen._id }));
    };
    useEffect(() => {
        setIsLoading(true);
        API.relatives.getById(relativeId).then(({ profession, genus, ...data }) =>
            setData((prevState) => ({
                ...prevState,
                ...data,
                genus: transformData(genus),
                profession: profession._id
            }))
        );

        API.genus.fetchAll().then((data) => {
            const genusList = Object.keys(data).map((genusName) => ({
                value: data[genusName]._id,
                label: data[genusName].name,
                color: data[genusName].color
            }));
            setGenus(genusList);
        });
        API.professions.fetchAll().then((data) => {
            const professionList = Object.keys(data).map((professionName) => ({
                label: data[professionName].name,
                value: data[professionName]._id
            }));
            setProfessions(professionList);
        });
    }, []);
    useEffect(() => {
        if (data._id) setIsLoading(false);
    }, [data]);

    const validatorConfig = {
        firstName: {
            isRequired: {
                message: "Введите ваше Имя"
            }
        },
        lasttName: {
            isRequired: {
                message: "Введите вашу Фамилию"
            }
        },
        patronymic: {
            isRequired: {
                message: "Введите ваше Отчество"
            }
        },
        city: {
            isRequired: {
                message: "Введите название города"
            }
        },
        street: {
            isRequired: {
                message: "Введите название улицы"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const handleChange = (target) => {
        // console.log("target", target);

        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isLastNameBeforeMarriage = data.lastNameBeforeMarriage;

    const isValid = Object.keys(errors).length === 0;
    // console.log("errors", errors);

    return (
        <div className="container mt-1">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-2">
                    <h1> Форма редактирования пользователя </h1>
                    {!isLoading && Object.keys(professions).length > 0 ? (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Фамилия"
                                name="lastName"
                                value={data.lastName}
                                onChange={handleChange}
                                error={errors.lastName}
                            />
                            <TextField
                                label="Имя"
                                name="firstName"
                                value={data.firstName}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Отчество"
                                name="patronymic"
                                value={data.patronymic}
                                onChange={handleChange}
                                error={errors.patronymic}
                            />
                            {isLastNameBeforeMarriage && <TextField
                                label="Девичья фамилия"
                                name="lastNameBeforeMarriage"
                                value={isLastNameBeforeMarriage}
                                onChange={handleChange}
                                error={errors.lastNameBeforeMarriage}
                            />
                            }
                            <TextField
                                label="Адрес, город"
                                name="City"
                                value={data.adress.city}
                                onChange={handleChange}
                                error={errors.adress}
                            />
                            <TextField
                                label="Адрес, улица"
                                name="Adress street"
                                value={data.adress.street}
                                onChange={handleChange}
                                error={errors.adress}
                            />
                            <RadioField
                                options={[
                                    { name: "Муж", value: "муж" },
                                    { name: "Жен", value: "жен" },
                                    { name: "Other", value: "other" }
                                ]}
                                value={data.sex}
                                name="sex"
                                label="Выберите пол "
                                onChange={handleChange}
                            />
                            <SelectField
                                defaultOption="Choose..."
                                label="Выбери свою профессию"
                                name="profession"
                                options={ professions }
                                onChange={handleChange}
                                value={data.profession}
                                error={errors.professions}
                            />
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="btn btn-primary w-100 mx-auto">
                                    Edit / Изменить
                            </button>
                        </form>
                    ) : (
                        "Loading ... "
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditRelativePage;
