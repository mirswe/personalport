import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerCard}>
                <div className={styles.headerInfo}>
                <h1>Ramir Dixon</h1>
            <p>Full Stack | ML Engineer, Atlanta</p>
            <nav className = {styles.headerLinks}>
                    <a href="mailto:mircantcode@gmail.com">Email</a>
                    <span>|</span>
                    <a href="https://www.linkedin.com/in/ramirsw/">LinkedIn</a>
                    <span>|</span>
                    <a href="https://github.com/mirswe">GitHub</a>
                    </nav>   
                </div>
            </div>
        </header>
    );
}

export default Header;