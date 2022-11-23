function FieldCard({rivalries, stadium}){

    return(
        <div>
            <div>{`${stadium.stadium_name}`}</div>
            <div>{`${stadium.stadium_image}`}</div>
            <div>{`${stadium.team_name}`}</div>
            <div>{`${stadium.stadium_image}`}</div>
            <div>{`${rivalries.rival_team}`}</div>
            <div>{`${rivalries.rival_logo}`}</div>
        </div>
    )
}
export default FieldCard;