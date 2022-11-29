import {useNavigate} from 'react-router-dom';



function ConferenceCard({conference}){
    const navigate = useNavigate();

    const navigateToFieldContainer = () =>{
        navigate(`/fields/${conference.name}`)
    }

    // const navigateToSEC = () => {
    //     navigate('fields/SEC')
    // }
    // const navigateToACC = () => {
    //     navigate('/ACC')
    // }
    // const navigateToBig12 = () => {
    //     navigate('/Big12')
    // }
    // const navigateToBig10 = () => {
    //     navigate('/Big10')
    // }
    // const navigateToPac12 = () => {
    //     navigate('/Pac12')
    // }

    return(
        <div>
            <img
            onClick={navigateToFieldContainer} 
            className="pubPlantCard" 
            alt="test" 
            src={conference.image}/>
        </div>
        
    )
}
export default ConferenceCard;
