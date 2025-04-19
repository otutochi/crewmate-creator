import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { supabase } from "./client";

const Update = () => {

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

    const occupationStatLimits = {
        craftsman: {
          iq: { min: 20, max: 50 },
          skill: { min: 50, max: 80 },
          speed: { min: 10, max: 50 },
          strength: { min: 50, max: 70 },
        },
        athlete: {
          iq: { min: 10, max: 50 },
          skill: { min: 20, max: 60 },
          speed: { min: 50, max: 90 },
          strength: { min: 50, max: 90 },
        },
        scientist: {
          iq: { min: 70, max: 100 },
          skill: { min: 40, max: 80 },
          speed: { min: 20, max: 50 },
          strength: { min: 20, max: 50 },
        },
        engineer: {
          iq: { min: 60, max: 90 },
          skill: { min: 70, max: 100 },
          speed: { min: 30, max: 60 },
          strength: { min: 40, max: 70 },
        },
        medic: {
          iq: { min: 50, max: 80 },
          skill: { min: 60, max: 90 },
          speed: { min: 40, max: 70 },
          strength: { min: 40, max: 70 },
        },
        navigator: {
          iq: { min: 70, max: 100 },
          skill: { min: 50, max: 80 },
          speed: { min: 60, max: 100 },
          strength: { min: 30, max: 60 },
        },
        diplomat: {
          iq: { min: 70, max: 100 },
          skill: { min: 60, max: 90 },
          speed: { min: 30, max: 60 },
          strength: { min: 20, max: 50 },
        },
        farmer: {
          iq: { min: 40, max: 70 },
          skill: { min: 40, max: 70 },
          speed: { min: 60, max: 100 },
          strength: { min: 60, max: 100 },
        },
        mechanic: {
          iq: { min: 50, max: 80 },
          skill: { min: 70, max: 100 },
          speed: { min: 40, max: 70 },
          strength: { min: 40, max: 70 },
        },
        cook: {
          iq: { min: 40, max: 70 },
          skill: { min: 50, max: 80 },
          speed: { min: 40, max: 70 },
          strength: { min: 30, max: 60 },
        },
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({...prev, [name]: value}))

    }

    const updateCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from("Crewmates")
            .update({name: formData.name, gender: formData.gender, occupation: formData.occupation, iq: formData.iq, skill: formData.skill, speed: formData.speed, strength: formData.strength})
            .eq("id", id);

        window.location = "/gallery";

    }

    const deleteCrewmate = async(event) => {
        event.preventDefault();

        await supabase
            .from("Crewmates")
            .delete()
            .eq("id", id);

        window.location = "/gallery"
    }

    return (
        <div className="Update" >

            <h1>Update Your Crewmate</h1>

            <form onSubmit={updateCrewmate}>
                {formData && formData.occupation && <div>

                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select a gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <br></br>

                    <label htmlFor="iq">IQ: {formData.iq}</label>
                    <div className="formRange" >

                        <span>Min: {occupationStatLimits[formData.occupation].iq.min}</span>
                        <div style={{paddingTop:"15px"}} >
                            <input type="range" id="iq" name="iq" value={formData.iq} onChange={handleChange} min={occupationStatLimits[formData.occupation].iq.min} max={occupationStatLimits[formData.occupation].iq.max} />
                        </div>
                        <span>Max: {occupationStatLimits[formData.occupation].iq.max}</span>

                    </div>    
                    <br></br>

                    <label htmlFor="skill">Skill: {formData.skill}</label>
                    <div className="formRange" >

                        <span>Min: {occupationStatLimits[formData.occupation].skill.min}</span>
                        <div style={{paddingTop:"15px"}} >
                            <input type="range" id="skill" name="skill" value={formData.skill} onChange={handleChange} min={occupationStatLimits[formData.occupation].skill.min} max={occupationStatLimits[formData.occupation].skill.max} />
                        </div>
                        <span>Max: {occupationStatLimits[formData.occupation].skill.max}</span>

                    </div>    
                    <br></br>

                    <label htmlFor="speed">Speed: {formData.speed}</label>
                    <div className="formRange" >

                        <span>Min: {occupationStatLimits[formData.occupation].speed.min}</span>
                        <div style={{paddingTop:"15px"}} >
                        <   input type="range" id="speed" name="speed" value={formData.speed} onChange={handleChange} min={occupationStatLimits[formData.occupation].speed.min} max={occupationStatLimits[formData.occupation].speed.max} />
                        </div>
                        <span>Max: {occupationStatLimits[formData.occupation].speed.max}</span>

                    </div>    
                    <br></br>

                    <label htmlFor="strength">Strength: {formData.strength}</label>
                    <div className="formRange" >

                        <span>Min: {occupationStatLimits[formData.occupation].strength.min}</span>
                        <div style={{paddingTop:"15px"}} >
                            <input type="range" id="strength" name="strength" value={formData.strength} onChange={handleChange} min={occupationStatLimits[formData.occupation].strength.min} max={occupationStatLimits[formData.occupation].strength.max} />
                        </div>
                        <span>Max: {occupationStatLimits[formData.occupation].strength.max}</span>

                    </div>    
                    <br></br>

                    <div style={{display: "flex", flexDirection: "column", gap: "20px"}} >
                        <button type="submit" >Update Crewmate</button> 
                        <button onClick={deleteCrewmate} >Delete Crewmate</button>
                    </div>

                </div>}
            </form>

            
        </div>
    )
}

export default Update;