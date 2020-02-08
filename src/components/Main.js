import React from "react";
import {Link} from "react-router-dom";

function Main(){
    return (
        <div>
            <div>
                <Link to="/privatepage/1" className="nav-link">Private page 1 </Link>
            </div>
            <div>
                <Link to="/privatepage/2" className="nav-link">Private Page 2 </Link>
            </div>
            <div>
                <Link to="/asyncpage/1" className="nav-link">Async private Page 1 </Link>
            </div>
            <div>
                <Link to="/asyncpage/2" className="nav-link">Async private Page 2 </Link>
            </div>
        </div>)
}

export default Main
