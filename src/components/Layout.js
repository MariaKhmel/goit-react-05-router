import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/dogs'>Collection</NavLink>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    )
}