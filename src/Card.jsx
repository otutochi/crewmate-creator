import React from "react";
import { Link } from "react-router";

const Card = ({ crewmate }) => {


    return (
        <div className="Card">
            <Link to={`/crewmate/${crewmate.id}`} style={{color:"inherit", textDecoration: "none"}} >
                <div>
                    <h3>{crewmate.name}</h3>
                    <p>Hi, I'm a {crewmate.gender} {crewmate.occupation}. Excited to join you lot!</p>
                </div>
            </Link>
            <Link to={`/update/${crewmate.id}`} ><button>Edit Crewmate</button></Link>
        </div>
    )
}

export default Card;