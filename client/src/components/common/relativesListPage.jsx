import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../../api";
import HowMuchRelatives from "./howMuchRelatives";
import RelativesMainTable from "./table/relativesMainTable";

const RelativesListPage = () => {
    // const relativesURL = "http://localhost:8080/api/relatives"
    const [relatives, setRelatives] = useState();
    const [genus, setGenus] = useState();
    const [professions, setProfessions] = useState();

    useEffect(() => {
        API.relatives.fetchAll()
            .then((data) => setRelatives(data));
        // .finally((relatives) => console.log("data", relatives));
    }, []);
    useEffect(() => {
        API.genus.fetchAll().then((data) => setGenus(data));
    }, []);
    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    const handleDelete = (relativeId) => {
        setRelatives(relatives.filter((relative) => relative._id !== relativeId));
    };

    return (
        <div className="relativesPage-container">
            {relatives && (
                <>
                    <HowMuchRelatives relatives={relatives} />

                    <RelativesMainTable
                        genus={genus}
                        relatives={relatives}
                        professions={professions}
                        onHandleDelete={handleDelete}
                    />
                </>
            )}
        </div>
    );
};
RelativesListPage.propTypes = {
    relatives: PropTypes.array,
    genus: PropTypes.object,
    professions: PropTypes.object,
    onHandleDelete: PropTypes.func
};
export default RelativesListPage;
