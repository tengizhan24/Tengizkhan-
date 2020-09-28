import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto flex-row">
                <li className="nav-item">
                    <Link className="nav-link p-2" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link p-2" to="/todos">Todos</Link>
                </li>
            </ul>
        </nav>
    )
}
