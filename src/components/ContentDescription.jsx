import { useState, useEffect } from "react"
import { Responsable } from "./Responsable";

const listFormations = [
    {
        name: "Category B License",
        poste: "Private car",
        description: "Authorizes driving light vehicles (car, utility vehicle < 3.5t) with up to 8 passengers. Valid in Europe, Africa and America under different names."
    },
    {
        name: "Category A License",
        poste: "Motorcycle",
        description: "Allows driving motorcycles of all engine sizes. Often subdivided into A1 (small engine), A2 (intermediate), A (all motorcycles)."
    },
    {
        name: "Category AM License",
        poste: "Moped",
        description: "Authorizes driving mopeds and scooters up to 50cc. Often accessible from age 14."
    },
    {
        name: "Category C License",
        poste: "Heavy goods vehicle",
        description: "Allows driving trucks and goods transport vehicles over 3.5 tonnes."
    },
    {
        name: "Category D License",
        poste: "Public transport",
        description: "Authorizes driving buses and coaches for the transport of people (more than 8 passengers)."
    },
    {
        name: "Category E License (BE, CE, DE)",
        poste: "Vehicle with trailer",
        description: "Allows driving combinations of vehicles with heavy trailers (car + trailer, truck + trailer, bus + trailer)."
    },
    {
        name: "Category T License",
        poste: "Agricultural tractor",
        description: "Authorizes driving agricultural tractors and related equipment. Specific to certain European and African countries."
    },
    {
        name: "Category G License",
        poste: "Special machinery",
        description: "Allows driving construction machinery, public works or special vehicles. Often required for professional drivers."
    },
    {
        name: "CDL License",
        poste: "Heavy goods vehicle America",
        description: "American license for trucks, buses and commercial vehicles. Categories: CDL-A (combination of heavy vehicles), CDL-B (simple truck/bus), CDL-C (specialized vehicles)."
    },
    {
        name: "Motorcycle license Africa",
        poste: "Light motorcycle",
        description: "Specific license for low-cylinder motorcycles, often used in Africa for motorcycle taxis and urban travel."
    }
];

export const ContentDescription =()=>{

    useEffect(() => {
        fetch('./description.txt')
            .then(response => response.text())
            .then(data => setDescription(data))
            .catch(error => {
                console.error('Error loading description:', error);
                setDescription("Ofa est une organisation exerçant principalement dans l'apprentissage de la conduite automobile.");
            });
    }, []);

    const [description, setDescription] = useState();
    const [formationsList, setFormationsList] = useState(listFormations);

    return(
        <>
            <div className="presentation">
                <h2 id="Courses">Open training courses</h2>
                <Responsable listFormations={formationsList}/>
                <div className="description" id="About">
                    <h2>About OFA</h2>
                    <DisplayDescription description={description}/>
                </div>
            </div>
        </>
    )
}

const DisplayDescription = ({description})=>{
    return(
        <div>
            <p>
                {description}
            </p>
        </div>
    )
}