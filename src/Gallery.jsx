import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import { supabase } from "./client";
import SummaryBar from "./SummaryBar";
import Metrics from "./Metrics";

const Gallery = () => {

    const [crewmates, setCrewmates] = useState([])

    useEffect(() => {

        const getCrewmates = async () => {
            const { data, error } = await supabase
                .from("Crewmates")
                .select()
                .order("created_at", {ascending: false});
            if(error) {
                console.error(error);
                return;
            } else {
                console.log(data);
                setCrewmates(data);
                return data;
            }


        }

        getCrewmates();

    }, [])
    
    const occupationCounts = {};
    const genderCounts = {}
    
    crewmates.forEach((crewmate)=>{
        occupationCounts[crewmate.occupation] = (occupationCounts[crewmate.occupation] || 0) + 1;
        genderCounts[crewmate.gender] = (genderCounts[crewmate.gender] || 0) + 1;
    });

    const occupationColors = {
        craftsman: "#F59E0B",
        athlete: "#10B981",
        scientist: "#3B82F6",
        engineer: "#8B5CF6",
        medic: "#EC4899",
        navigator: "#14B8A6",
        diplomat: "#F43F5E",
        farmer: "#A3E635",
        mechanic: "#F97316",
        cook: "#FCD34D",
    };
    const genderColors = { 
        male: "#3B82F6", 
        female: "#EC4899" 
    };


    return (
        <div className="Gallery" >

            <h1>Your Crewmate Gallery </h1>

            <div style={{ display: "flex", flexDirection: "column", alignSelf: "flex-start", gap: "20px" }} >
                <div style={{ display: "flex", alignItems: "center", gap: "50px" }} >
                    <h4 style={{ width: "150px", margin: 0, flexShrink: 0 }}>Occupation Distribution</h4>
                    <div style={{ flex: "1 1 auto", minWidth: 0 }}>
                        <SummaryBar data={occupationCounts} colors={occupationColors} />
                    </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "50px" }} >
                    <h4 style={{ width: "150px", margin: 0, flexShrink: 0 }}>Gender Distribution</h4>
                    <div style={{ flex: "1 1 auto", minWidth: 0 }}>
                        <SummaryBar data={genderCounts} colors={genderColors} />
                    </div>
                </div>

                <div>
                    <Metrics occupationCounts={occupationCounts} genderCounts={genderCounts} />
                </div>
            </div>


            {crewmates ? <div style={{display: "flex", gap: "20px", padding: "20px", flexWrap:"wrap"}} >{crewmates.map((data) => <Card key={data.id} crewmate={data} /> )}</div> : <p>Oops! No crewmates yet.</p>}

        </div>
    )
}

export default Gallery;