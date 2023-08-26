import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import API from "../../../api";
// import { professions } from "../../../api/fake.api/professions.api";

const EditRelativePage = () => {
    const { relativeId } = useParams();
    // const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        patronymic: "",
        profession: "",
        sex: "",
        genus: []
    });
    const [professions, setProfessions] = useState([]);
    const [genus, setGenus] = useState([]);

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
    const handleSubmit = (e) => {
        e.preventDefault();
        // const isValid = validate();
        // if (!isValid) return;
        const { profession, genus } = data;
        API.relatives.update(relativeId, {
            ...data,
            profession: getProfessionById(profession),
            genus: getGenus(genus)
        });
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
                profession: profession.name
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
        API.professions.fetchAll().then((data) => setProfessions(data));
    }, []);
    useEffect(() => {
        if (data._id) setIsLoading(false);
    }, [data]);

    console.log("genus", genus);
    console.log("professions", professions);
    console.log("data", data.profession);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h1> Форма редактирования пользователя </h1>
                    {!isLoading && relativeId ? (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Имя"
                                name="firstName"
                                value={data.firstName}
                                // onChange={handleChange}
                                // error={errors.name}
                            />
                            <TextField
                                label="Фамилия"
                                name="lastName"
                                value={data.lastName}
                                // onChange={handleChange}
                                // error={errors.name}
                            />
                            <TextField
                                label="Отчество"
                                name="patronymic"
                                value={data.patronymic}
                                // onChange={handleChange}
                                // error={errors.name}
                            />
                            <RadioField
                                options={[
                                    { name: "Муж", value: "муж" },
                                    { name: "Жен", value: "жен" },
                                    { name: "Other", value: "other" }
                                ]}
                                value={data.sex}
                                name="sex"
                                label="Выберите пол"
                                // onChange={handleChange}
                            />
                            <SelectField
                                defaultOption="Choose..."
                                label="Выбери свою профессию"
                                name="profession"
                                options={ professions }
                                // onChange={handleChange}
                                value={data.profession}
                                // error={errors.professions}
                            />
                            <button
                                type="submit"
                                // disabled={!isValid}
                                className="btn btn-primary w-100 mx-auto">
                                    Edit/Изменить
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
