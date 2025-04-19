import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "./client";

const Create = () => {

    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        occupation: "",
        iq: 0,
        skill: 0,
        speed: 0,
        strength: 0,
    });

    useEffect(() => {
        if(formData.occupation){

            const limits = occupationStatLimits[formData.occupation];
            setFormData((prev) => ({
                ...prev,
                iq: limits.iq.min,
                skill: limits.skill.min,
                speed: limits.speed.min,
                strength: limits.strength.min
            }));
        }
    },[formData.occupation])

    const [step, setStep] = useState(1);

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
        setFormData((prev) => ({...prev, [name]:value}));

    }

    const handleNext = () => {

        if(!formData.name || !formData.gender || !formData.occupation){
            alert("Please select crewmate attributes before continuing!!");
            return;
        }

        setStep((prev) => (prev + 1));
    }

    const handleSubmit = async (event) => {

        event.preventDefault();
        

        await supabase
            .from("Crewmates")
            .insert(formData)
            .select();

        window.location = "/gallery";

    }


    return (
        <div className="Create" >

            <h1>Create a New Crewmate</h1>

            <form onSubmit={handleSubmit}>

                {step == 1 && <div style={{display: "flex", flexDirection:"column"}} >

                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                    <br></br>

                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select a gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <br></br>

                    <label htmlFor="occupation">Occupation</label>
                    <select id="occupation" name="occupation" value={formData.occupation} onChange={handleChange}>
                        <option value="">Select an occupation</option>
                        <option value="craftsman">Craftsman</option>
                        <option value="athlete">Athlete</option>
                        <option value="scientist">Scientist</option>
                        <option value="engineer">Engineer</option>
                        <option value="medic">Medic</option>
                        <option value="navigator">Navigator</option>
                        <option value="diplomat">Diplomat</option>
                        <option value="farmer">Farmer</option>
                        <option value="mechanic">Mechanic</option>
                        <option value="cook">Cook</option>
                    </select>
                    <br></br>

                    <button onClick={handleNext}>Continue</button>

                </div>}


                {step == 2 && <div style={{display: "flex", flexDirection:"column"}} >

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
                            <input type="range" id="speed" name="speed" value={formData.speed} onChange={handleChange} min={occupationStatLimits[formData.occupation].speed.min} max={occupationStatLimits[formData.occupation].speed.max} />
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

                    <button type="submit" >Create Crewmate</button>              

                </div>}

            </form>

        </div>
    )
}

export default Create;