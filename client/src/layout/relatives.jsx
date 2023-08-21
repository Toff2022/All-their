import React from "react";
import { useParams } from "react-router";
import RelativePage from "../components/page/relativePage/relativePage";
import RelativesListPage from "../components/page/relativesListPage/relativesListPage";
import EditRelativePage from "../components/page/editRelativePage/editRelativePage";

const Relatives = () => {
    const params = useParams();
    const { relativeId, edit } = params;
    return (
        <>
            {relativeId ? (
                edit ? (
                    <EditRelativePage />
                ) : (
                    <RelativePage relativeId={relativeId} />
                )
            ) : (
                <RelativesListPage />
            )}
        </>
    );
};

export default Relatives;
