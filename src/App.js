import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrap}>
      <Header />
      <main className={styles['box-menu']}>
        <button id="menu1" className={styles.menu}>
          <h3>장부식당<br />돌림판</h3>
          <div><img src="images/bet.png" alt="메뉴(돌림판)" className={styles['img-menu']} /></div>
        </button>
        <button id="menu2" className={styles.menu}>
          <h3>점심메뉴<br />랜덤슬롯</h3>
          <div><img src="images/slot-machine.png" alt="메뉴(룰랫)" className={styles['img-menu']} /></div>
        </button>
        <button id="menu3" className={styles.menu}>
          <h3>장부식당<br />지도</h3>
          <div><img src="images/location.png" alt="메뉴(지도)" className={styles['img-menu']} /></div>
        </button>
        <button id="menu4" className={styles.menu}>
          <h3>장부식당<br />메뉴정보</h3>
          <div><img src="images/restaurant.png" alt="메뉴(식당정보)" className={styles['img-menu']} /></div>
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
