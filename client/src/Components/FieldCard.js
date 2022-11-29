function FieldCard({field, beenTo, wantToGo, setBeenTo, setWantToGo}){

    return(
        <div className="truePlantCon">
            <div >{`${field.field_name} Home To The ${field.team_name}`}</div>
            <img className="pubPlantCard"  alt="test" src={field.field_image}/>
            <img className="pubPlantCard"  alt="test" src={field.team_image}/>
            <div>{`Rivalry of this Team Is The ${field.rivalry.rival_team}`}</div>
            <img className="pubPlantCard"  alt="test" src={field.rivalry.rival_logo}/>
            <button className='buttonPretty' onClick={() => setBeenTo([...beenTo, field])}>I Have Been Here</button>
            <button className='buttonPretty' onClick={() => setWantToGo([...wantToGo, field])}>I Want To Go Here</button>
        </div>
    )
}
export default FieldCard;
