import { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Dogs = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const dogId = searchParams.get('dogId') ?? '';
    const [dogs] = useState(['dog-1', 'dog-2', 'dog-3']);
    const visibleDogs = dogs.filter(dog => {
        return dog.includes(dogId)
    })
    const location = useLocation();
    console.log(location)

    const updateQueryString = (e) => {
        const nextparams = e.target.value !== '' ? {dogId : e.target.value} : { };
        setSearchParams(nextparams)
    }

    return (
        <>
            <input type="text" value={dogId} onChange={updateQueryString} />
            <div>{visibleDogs.map(dog => {
                return <Link key={dog} to={`${dog}`} state={{from:location}}>{dog}</Link>
            })}
            </div>
        </>
    )
}

export default Dogs;