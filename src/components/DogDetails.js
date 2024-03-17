import { useRef } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const DogDetails = () => {
    const {dogId} = useParams();
    
    const location = useLocation();
    console.log(location)
    const locationRef = useRef(location.state?.from ?? '/dogs')

    return (<>
        <h1>dogId : {dogId}</h1>
        <Link to={locationRef.current}>Back to collection</Link>
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