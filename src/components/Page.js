import React from "react";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

function Page(){
    const {page} = useParams();

    return (
        <>
            <div>
                Page {page}
            </div>
            <Link to="/" >Back</Link>
        </>
    )
}

export default Page
