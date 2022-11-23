function FieldCard({rivalries, field}){

    return(
        <div>
            <div >{`${field.field_name}`}</div>
            <img className="pubPlantPic" alt="test" src={field.field_image}/>
            <div>{`${field.team_name}`}</div>
            <img className="pubPlantPic" alt="test" src={field.team_image}/>
            {/* <div>{`${field.rivalries.rival_team}`}</div>
            <img className="pubPlantPic" alt="test" src={field.rivalries.rival_logo}/> */}
        </div>
    )
}
export default FieldCard;