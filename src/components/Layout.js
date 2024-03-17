import { NavLink, Outlet, useSearchParams } from "react-router-dom";

export const Layout = () => {
    const [searchParams] = useSearchParams();
    console.log(Object.fromEntries([...searchParams]))


    return (
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/dogs'>Collection</NavLink>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}