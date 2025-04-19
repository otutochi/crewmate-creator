import React from "react";
import { useState, useEffect } from "react";

const Metrics = ({ occupationCounts, genderCounts }) => {

    const messages = [];
    // Total crewmates
    const total = Object.values(occupationCounts).reduce((sum, v) => sum + v, 0) || 1;
    const [isReady, setIsReady] = useState(false);

    // Craftsman
    {
        const count = occupationCounts.craftsman || 0;
        const pct = (count/total)*100;
        if (count < 2) {
        messages.push(`🛠️ Only ${count} craftsman on board—too few builders to construct your colony shelters!`);
        } else if (count > 5) {
        messages.push(`🚧 ${count} craftsmen might crowd the workshops—consider sending some to other duties.`);
        }
        if (pct > 30) {
        messages.push(`📊 Craftsmen are ${pct.toFixed(0)}% of crew—over ${30}% may neglect other essential roles.`);
        }
    }
    // Athlete
    {
        const count = occupationCounts.athlete || 0;
        const pct = (count/total)*100;
        if (count < 1) {
        messages.push(`🏃‍♂️ No athletes—without physical experts, critical high-speed tasks could fail on Otuz.`);
        } else if (count > 4) {
        messages.push(`⚠️ ${count} athletes dominate at ${pct.toFixed(0)}%—too many runners might lack technical oversight.`);
        }
        if (pct > 25) {
        messages.push(`📈 Athletes are ${pct.toFixed(0)}% of crew—beyond 25% might unbalance skill distribution.`);
        }
    }
    // Scientist
    {
        const count = occupationCounts.scientist || 0;
        const pct = (count/total)*100;
        if (count < 1) {
        messages.push(`🔬 No scientist aboard—research into Otuz’s ecosystem will be impossible.`);
        } else if (count > 2) {
        messages.push(`🧪 ${count} scientists may overlap experiments; focus resources carefully.`);
        }
        if (pct > 15) {
        messages.push(`📊 Scientists at ${pct.toFixed(0)}% may stall other development priorities.`);
        }
    }
    // Engineer
    {
        const count = occupationCounts.engineer || 0;
        const pct = (count/total)*100;
        if (count < 2) {
        messages.push(`⚙️ Only ${count} engineer—mechanical failures on Otuz could be catastrophic.`);
        } else if (count > 6) {
        messages.push(`🏭 ${count} engineers might outnumber support roles—rebalance the workforce.`);
        }
        if (pct > 35) {
        messages.push(`📈 Engineers are ${pct.toFixed(0)}%—more than 35% may congest technical bays.`);
        }
    }
    // Medic
    {
        const count = occupationCounts.medic || 0;
        const pct = (count/total)*100;
        if (count < 1) {
        messages.push(`🚑 No medic—crew health emergencies will be untreated on the journey.`);
        } else if (count > 3) {
        messages.push(`💉 ${count} medics at ${pct.toFixed(0)}%—consider reallocating some to other roles.`);
        }
        if (pct > 20) {
        messages.push(`📊 Medics exceed 20% of crew—medical staff surplus may slow mission support.`);
        }
    }
    // Navigator
    {
        const count = occupationCounts.navigator || 0;
        const pct = (count/total)*100;
        if (count < 2) {
        messages.push(`🗺️ Only ${count} navigator—course plotting to Otuz could go awry.`);
        } else if (count > 4) {
        messages.push(`🗺️ ${count} navigators might duplicate efforts—streamline navigation crew.`);
        }
        if (pct > 25) {
        messages.push(`📈 Navigators are ${pct.toFixed(0)}%—beyond 25% may overcomplicate voyage planning.`);
        }
    }
    // Diplomat
    {
        const count = occupationCounts.diplomat || 0;
        const pct = (count/total)*100;
        if (count < 1) {
        messages.push(`🤝 No diplomat—negotiations with Otuzian lifeforms impossible.`);
        } else if (count > 2) {
        messages.push(`📜 ${count} diplomats at ${pct.toFixed(0)}%—consider focusing on other critical tasks.`);
        }
        if (pct > 15) {
        messages.push(`📊 Diplomats exceed 15%—you may lack operational manpower.`);
        }
    }
    // Farmer
    {
        const count = occupationCounts.farmer || 0;
        const pct = (count/total)*100;
        if (count < 2) {
        messages.push(`🌾 Only ${count} farmer—food supplies on Otuz risk collapse.`);
        } else if (count > 5) {
        messages.push(`🚜 ${count} farmers may overexpand fields at expense of habitat.`);
        }
        if (pct > 30) {
        messages.push(`📈 Farmers are ${pct.toFixed(0)}%—beyond 30% may disrupt ecological balance.`);
        }
    }
    // Mechanic
    {
        const count = occupationCounts.mechanic || 0;
        const pct = (count/total)*100;
        if (count < 1) {
        messages.push(`🔧 No mechanic—broken machinery on Otuz will remain inoperable.`);
        } else if (count > 4) {
        messages.push(`🔧 ${count} mechanics crowd the workshops—streamline maintenance crew.`);
        }
        if (pct > 25) {
        messages.push(`📊 Mechanics at ${pct.toFixed(0)}%—too high for balanced operations.`);
        }
    }
    // Cook
    {
        const count = occupationCounts.cook || 0;
        const pct = (count/total)*100;
        if (count < 1) {
        messages.push(`🍳 No cook—crew meals will be inedible on Otuz.`);
        } else if (count > 4) {
        messages.push(`🍽️ ${count} cooks may overwhelm galley capacity.`);
        }
        if (pct > 25) {
        messages.push(`📈 Cooks are ${pct.toFixed(0)}%—consider more technical staff.`);
        }
    }

    // Gender rules
    const femaleCount = genderCounts.female || 0;
    const maleCount = genderCounts.male || 0;
    if (femaleCount <= 1) {
        messages.push(
        `🚫 Only ${femaleCount} female(s) — reproduction and genetic diversity on Otuz won't stand a chance.`
        );
    }
    if (maleCount <= 1) {
        messages.push(
        `🛑 Only ${maleCount} male(s) — diversity is key to thriving on Otuz.`
        );
    }
    const femalePct = (femaleCount / total) * 100;
    const malePct = (maleCount / total) * 100;
    if (femalePct > 70) {
        messages.push(
        `📈 Too skewed: ${femalePct.toFixed(0)}% female — consider adding more male crew for balance.`
        );
    }
    if (malePct > 70) {
        messages.push(
        `📉 Gender imbalance alert: ${malePct.toFixed(0)}% male — add female crew to ensure growth.`
        );
    }

    // If no messages, all is well
    if (messages.length === 0) {
        messages.push(
        "✅ Your crew looks well‑balanced and ready to conquer Otuz!"
        );
    }

    useEffect(()=>{
        if (messages.length === 0) {
            setIsReady(true);
        } else {
            setIsReady(false);
        }
    }, [isReady])

    // Pick a random message to display
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    return (
        <div
          style={{
            border: `2px solid ${isReady ? 'green' : 'red'}`,
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: isReady ? '#f0fdf4' : '#fef2f2'
          }}
        >
          <p style={{ margin: 0 }}>{randomMessage}</p>
        </div>
    );
};

export default Metrics;