import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            {/*<img src="" alt="스포츠투아이 로고" />*/}
            <p>문의사항: 개발3팀 김연중 kkk3052@sports2i.com</p>
            <p>Copyright © sports2i Corp</p>
        </footer>
    );
}

export default Footer;