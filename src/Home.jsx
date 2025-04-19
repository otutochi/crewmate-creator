import React from "react";
import { Link } from "react-router";


const Home = () => {


    return (
        <div className="Home" >

            <h1>ARE YOU READY?</h1>
            <h3>A spaceship is living for a new planet Otuz, but they must first select crewmates that would form the first population of Otuzians. However, there must be a balance of different occupations for the population to thrive. Help create new crewmates to balance out the population and make sure that the Otuzians succeed</h3>
            <Link to="/create"><button>Create a Crewmate</button></Link>

        </div>
    )
}

export default Home;