import { useParams } from "react-router";
import { useState, useEffect } from "react";
import React from "react";
import { supabase } from "./client";
import { Link } from "react-router";

const Crewmate = () => {

    const { id } = useParams();

    const [formData, setFormData] = useState({});
    
    const getCrewmate = async () => {
    
            const { data, error } = await supabase
                .from("Crewmates")
                .select()
                .eq("id", id)
                .single()
            if (error) {
                console.error(error)
            } else {
                //console.log(data)
                setFormData(data)
            }
    }
    
    useEffect(() => {
        getCrewmate();
    }, [id])


    return (
        <div className="Crewmate">

            {formData && formData.name && <div>

                <h1>{formData.name}</h1>
                <div>
                    <p>Gender: {formData.gender}</p>
                    <p>Occupation: {formData.occupation}</p>
                    <p>IQ: {formData.iq}</p>
                    <p>Skill: {formData.skill}</p>
                    <p>Speed: {formData.speed}</p>
                    <p>Strength: {formData.strength}</p>
                </div>
                <Link to={`/update/${formData.id}`} ><button>Edit Crewmate</button></Link>

            </div>}
        </div>
    )
}

export default Crewmate;