import React from "react";
import { useParams } from "react-router-dom";
import RelativPage from "../components/common/relativPage";
import RelativesListPage from "../components/common/relativesListPage";

const RelativesPage = () => {
    const params = useParams();
    const { relativId } = params;
    return <> {relativId ? <RelativPage relativId={relativId} /> : <RelativesListPage />}</>;
};

export default RelativesPage;
