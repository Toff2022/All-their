import React, { useState } from "react";
// import { relatives } from "../api/fake.api/relatives.api";
// import { professions } from "../api/fake.api/professions.api";
import API from "../api";
import HowMuchRelatives from "../components/common/howMuchRelatives";
import RelativesTableHead from "../components/common/relativesTableHead";
// import { genus } from "../api/fake.api/genus.api";
// import Relatives from "../api/fake.api/relatives.api"

const FamilyTree = () => {
    // const relativesURL = "http://localhost:8080/api/relatives"
    const [relatives, setRelatives] = useState(API.relatives.fetchAll());
    // const [professions, setProfessions] = useState(API.professions.fetchAll());
    //     const [genus, setGenus] = useState();
    //     useEffect(() => {
    // API.genus.fetchAll()
    //     },[])
    //     console.log("genus", genus);
    const handleDelete = (relativeId) => {
        setRelatives(relatives.filter((relative) => relative._id !== relativeId));
    };
    const maxCount = relatives.length;
    // console.log("genusCount", genusCount);
    return (
        <div className="familyTree-container">
            <HowMuchRelatives maxCount={maxCount} />
            <RelativesTableHead
                maxCount={maxCount}
                relatives={relatives}
                onHandleDelete={handleDelete}
            />
        </div>
    );
};

export default FamilyTree;
