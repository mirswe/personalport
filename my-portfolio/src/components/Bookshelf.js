import React from 'react';
import styles from './Bookshelf.module.css';

function Bookshelf() {
    const [activeSection, setActiveSection] = useState('current');

    const currentlyReading = ['Book 1', 'Book 2', 'Book 3'];
    const readBooks = ['Book A', 'Book B', 'Book C'];

    return (
        <section className = {styles.bookshelf}>
            <h2>My Bookshelf</h2>
            <div className = {styles.toggleButtons}>
                <button
                    onClick = {() => setActiveSection('current')}
                    className = {activeSection === 'current' ? styles.active : ''}
                >
                    Currently Reading
                </button>
                <button
                    onClick = {() => setActiveSection('read')}
                    className = {activeSection === 'read' ? styles.active : ''}
                >
                    Books I've Read
                </button>
                </div>
                {activeSection === 'current' &&(
                    <div>
                        <h3>What I'm Currently Reading</h3>
                    <ul>
                        {currentlyReading.map((book, index) => (
                          <li key = {index}>{book}</li>  
                        ))}
                    </ul>
                    </div>
                )}
                {activeSection === 'read' && (
                    <div>
                        <h3>Books I've Read</h3>
                        <ul>
                            {readBooks.map((book, index) => (
                                <li key={index}>{book}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>
    );
}


export default Bookshelf;