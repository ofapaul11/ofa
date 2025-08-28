import { useState, useEffect } from "react"

export const Welcome = () => {
    const [name, setName] = useState("Ofa Driving School");
    const locations = ["Paris", "Lyon", "Marseille", "London", "Abuja"];
    const [locationIndex, setLocationIndex] = useState(0);
    const [hours, setHours] = useState("7j/7 24h/24.");

    useEffect(() => {
        const interval = setInterval(() => {
            setLocationIndex(idx => (idx + 1) % locations.length);
        }, 20000);
        return () => clearInterval(interval);
    }, [locations.length]);

    return (
        <div className="home">
            <h1>{name}</h1>
            <p className="subtitle">{hours}</p>
            <p className="location">{locations[locationIndex]}</p>
            <a href="#Courses">
                <button className="floating-btn" >
                        <img src="ressources/chevron-down.svg" alt="Chevron Down" />
                </button>
            </a>
        </div>
    );
}