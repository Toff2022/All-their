import React from "react";
import { useParams } from "react-router-dom";
import RelativPage from "../components/page/relativPage";
import RelativesListPage from "../components/page/relativesListPage";

const RelativesPage = () => {
    const params = useParams();
    const { relativId } = params;
    return <> {relativId ? <RelativPage relativId={relativId} /> : <RelativesListPage />}</>;
};

export default RelativesPage;
