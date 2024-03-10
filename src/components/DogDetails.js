import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const DogDetails = () => {
    const {dogId} = useParams();
    
    const location = useLocation();
    console.log(location)

    return (<>
        <h1>dogId : {dogId}</h1>
        <Link to={location.state.from}>Back to collection</Link>
        <ul>
            <li>
                <Link to='breeds'>Breeds</Link>
            </li>
            <li>
                <Link to='pictures'>Pictures</Link>
            </li>

        </ul>
        <Outlet/>
    </>)
}
export default DogDetails;