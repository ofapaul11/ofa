import { useState, useEffect } from "react"
import { Responsable } from "./Responsable";

const listFormations = [
    {
        name: "Permis B",
        poste: "Voiture particulière",
        description: "Autorise la conduite de véhicules légers (voiture, utilitaire < 3,5t) avec jusqu'à 8 passagers. Valable en Europe, Afrique et Amérique sous différentes appellations."
    },
    {
        name: "Permis A",
        poste: "Moto",
        description: "Permet de conduire des motos de toutes cylindrées. Souvent subdivisé en A1 (petite cylindrée), A2 (intermédiaire), A (toutes motos)."
    },
    {
        name: "Permis AM",
        poste: "Cyclomoteur",
        description: "Autorise la conduite de cyclomoteurs et scooters jusqu'à 50cc. Souvent accessible dès 14 ans."
    },
    {
        name: "Permis C",
        poste: "Poids lourd",
        description: "Permet de conduire des camions et véhicules de transport de marchandises de plus de 3,5 tonnes."
    },
    {
        name: "Permis D",
        poste: "Transport en commun",
        description: "Autorise la conduite d'autobus et autocars pour le transport de personnes (plus de 8 passagers)."
    },
    {
        name: "Permis E (BE, CE, DE)",
        poste: "Véhicule avec remorque",
        description: "Permet de conduire des ensembles de véhicules avec remorque lourde (voiture + remorque, camion + remorque, bus + remorque)."
    },
    {
        name: "Permis T",
        poste: "Tracteur agricole",
        description: "Autorise la conduite de tracteurs agricoles et matériels assimilés. Spécifique à certains pays européens et africains."
    },
    {
        name: "Permis G",
        poste: "Engins spéciaux",
        description: "Permet de conduire des engins de chantier, de travaux publics ou véhicules spéciaux. Souvent requis pour les conducteurs professionnels."
    },
    {
        name: "Permis CDL",
        poste: "Poids lourd Amérique",
        description: "Permis américain pour camions, bus et véhicules commerciaux. Catégories : CDL-A (ensemble de véhicules lourds), CDL-B (camion/bus simple), CDL-C (véhicules spécialisés)."
    },
    {
        name: "Permis moto Afrique",
        poste: "Moto légère",
        description: "Permis spécifique pour motos de faible cylindrée, souvent utilisé en Afrique pour les motos-taxis et déplacements urbains."
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