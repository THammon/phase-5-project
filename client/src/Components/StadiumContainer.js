import StadiumCard from "./StadiumCard";

function StadiumContainer({rivalries, stadiums}){

    return(
        <div>
            {stadiums?.map(stadium => <StadiumCard {...stadium} stadium={stadium} key={stadium.id} rivalries={rivalries}/>)}
        </div>
    )
}
export default StadiumContainer;