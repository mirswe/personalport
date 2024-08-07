import React, { useEffect } from "react";
import styles from './FadeIn.module.css'

function FadeIn({ children }) {
    const [isVisible, setVisible] = useState(false);

    useEffect(() =>{
        setVisible(true);
    }, []);

    return (
        <div className = {`${styles.fadeIn} ${isVisible ? styles.visible : ''}`}>
            {children}
        </div>
    );
}

export default FadeIn;