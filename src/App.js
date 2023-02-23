import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="box-menu">
        <button id="menu1" className="menu">
          <h3>장부식당<br />돌림판</h3>
          <div><img src="public/images/bet.png" alt="메뉴(돌림판)" className="img-menu" /></div>
        </button>
        <button id="menu2" className="menu">
          <h3>점심메뉴<br />랜덤슬롯</h3>
          <div><img src="public/images/slot-machine.png" alt="메뉴(룰랫)" className="img-menu" /></div>
        </button>
        <button id="menu3" className="menu">
          <h3>장부식당<br />지도</h3>
          <div><img src="public/images/location.png" alt="메뉴(지도)" className="img-menu" /></div>
        </button>
        <button id="menu4" className="menu">
          <h3>장부식당<br />메뉴정보</h3>
          <div><img src="public/images/restaurant.png" alt="메뉴(식당정보)" className="img-menu" /></div>
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
