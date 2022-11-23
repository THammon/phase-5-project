function FieldCard({rivalries, stadium}){

    return(
        <div>
            <div>{`${stadium.field_name}`}</div>
            <img className="pubPlantPic" alt="test" src={stadium.field_image}/>
            <div>{`${stadium.team_name}`}</div>
            <img className="pubPlantPic" alt="test" src={stadium.team_image}/>
            {/* <div>{`${stadium.rivalries.rival_team}`}</div>
            <img className="pubPlantPic" alt="test" src={stadium.rivalries.rival_logo}/> */}
        </div>
    )
}
export default FieldCard;