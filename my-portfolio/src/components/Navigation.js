import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
    return (
        <nav className = {styles.tabs}>
        <ul>
            <li><NavLink to = "/about" className = {({ isActive }) => isActive ? styles.active : undefined}>About</NavLink></li>
            <li><NavLink to = "/projects" className = {({ isActive }) => isActive ? styles.active : undefined}>Projects</NavLink></li>
            <li><NavLink to = "/bookshelf" className = {({ isActive }) => isActive ? styles.active : undefined}>Bookshelf</NavLink></li>
            <li><NavLink to = "/blog" className = {({ isActive }) => isActive ? styles.active : undefined}>Blog</NavLink></li>
            <li><NavLink to = "/notepad" className = {({ isActive }) => isActive ? styles.active : undefined}>Notepad</NavLink></li>
        </ul>
        </nav>
    );
}

export default Navigation;