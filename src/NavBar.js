import './navbar.css'
import {Link, useMatch, useResolvedPath} from 'react-router-dom';

// use react-router-dom to only render the changed part, not the nav-bar which is constant
// Link replaces <a> tag  also replace href with 'to'

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Barkley</Link>
        <ul>
            <CustomLink to="/group">Group</CustomLink>
            <CustomLink to="/self">Self</CustomLink>
            <CustomLink to="/self1">Self1</CustomLink>
            <CustomLink to="/self2">Self2</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }) {
 //   const path = window.location.pathname
    
    const resolvedPath =  useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })   // entire path
    return (
        <li className={ isActive ? "active" : "" }>
            <Link to={to} {...props}>
                {children}
            </Link>
            </li>      
    )
}