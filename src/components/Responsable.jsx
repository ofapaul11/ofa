export const Responsable = ({ listFormations }) =>{
    return(
        <div className="card">
            {listFormations.map((formation, index) => (
                <div key={index} className="card-permis">
                    <h3>{formation.name}</h3>
                    <p>{formation.poste}</p>
                    <p>{formation.description}</p>
                </div>
            ))}
        </div>
    )
}