import React from 'react';
import JobPageHeader from "../Components/JobPage/JobPageHeader";
import JobPage from "../Components/JobPage/JobPage";
import JobPageFooter from "../Components/JobPage/JobPageFooter";

function Jobs(props) {
    return (
        <>
            <JobPageHeader/>
            <JobPage/>
            <JobPageFooter/>
        </>
    );
}

export default Jobs;