import React, { useEffect, useState } from "react";
// import { relatives } from "../api/fake.api/relatives.api";
// import { professions } from "../api/fake.api/professions.api";
import API from "../api";
import HowMuchRelatives from "../components/common/howMuchRelatives";
import RelativesMainTable from "../components/common/relativesMainTable";

const FamilyTree = () => {
    // const relativesURL = "http://localhost:8080/api/relatives"
    const [relatives, setRelatives] = useState();
    const [genus, setGenus] = useState();

    useEffect(() => {
        API.relatives.fetchAll()
            .then((data) => setRelatives(data));
        // .finally((relatives) => console.log("data", relatives));
    }, []);
    useEffect(() => {
        API.genus.fetchAll().then((data) => setGenus(data));
    }, []);
    // const [professions, setProfessions] = useState(API.professions.fetchAll());
    //     const [genus, setGenus] = useState();
    //     useEffect(() => {
    // API.genus.fetchAll()
    //     },[])

    const handleDelete = (relativeId) => {
        setRelatives(relatives.filter((relative) => relative._id !== relativeId));
    };

    return (
        <div className="familyTree-container">
            {relatives && (
                <HowMuchRelatives relatives={relatives} />
            )}
            {relatives && (
                <RelativesMainTable
                    genus={genus}
                    relatives={relatives}
                    onHandleDelete={handleDelete}
                />
            )}
        </div>
    );
};

export default FamilyTree;
