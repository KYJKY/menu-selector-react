import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><img id="home" src="images/home.png" alt="홈으로 가기" /></li>
                    <li><img className="logo" src="" alt="" /></li>
                    <li><img id="menuList" src="images/menu.png" alt="메뉴" /></li>
                </ul>
            </nav>
            <h1 className={styles.title}><span style={{ 'color': '#fd3434' }}>S2i</span> 점심메뉴 Selector</h1>
        </header>
    );
}

export default Header;
