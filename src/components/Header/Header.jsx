import React from 'react';
import styles from './Header.module.css'

const Header = ({setToken}) => {

    const handleout = () => {
        setToken(null)
        localStorage.clear();
    }

    return (
        <div className={styles.Header}>
                <div className={styles.Content}>
                    <button onClick={() => handleout()}>Выйти</button>
                </div>
        </div>
    );
};

export default Header;