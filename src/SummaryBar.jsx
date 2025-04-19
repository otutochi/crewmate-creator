import React from "react";


const SummaryBar = ({ data, colors }) => {

    const total = Object.values(data).reduce((sum, v) => sum + v , 0);



    return (

        <div>
            <div style={{width: "100%", height: "16px", backgroundColor: "#e5e7eb", display: "flex", borderRadius: "8px", overflow: "hidden"}} >

                {Object.entries(data).map(([key, count]) => {
                    const pct = (count/total) * 100;

                    return (
                        <div
                            key = {key}
                            style = {{width: `${pct}%`, backgroundColor: colors[key] || "#888" , height: "100%" }}
                            title = {`${key}: ${count} (${pct.toFixed(0)}%)`}
                        ></div>

                    );
                })}

            </div>
            <div style={{display: "flex", gap: "10px", alignItems: "center"}} >
                {Object.entries(data).map(([key, count]) => {
                    return (
                        <div key={key} style={{display: "flex", alignItems: "center", gap: "4px"}} >
                            <span style = {{backgroundColor: colors[key] || "#888" , borderRadius : "8px" , display:"inline-block", width: "12px", height: "12px" }} ></span>
                            <span>{key} ({count})</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );

}

export default SummaryBar;