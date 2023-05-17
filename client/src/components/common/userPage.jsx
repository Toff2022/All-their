import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../../api";

const UserPage = ({ relativId }) => {
    const [relativ, setRelativ] = useState();
    useEffect(() => {
        API.relatives.getById(relativId).then(data => setRelativ(data));
    });
    console.log("relativ", relativ);
    return (
        <h1>{relativ ? relativ.name : "Loading..."}</h1>
    );
};
UserPage.propTypes = {
    relativId: PropTypes.string.isRequired
};

export default UserPage;
