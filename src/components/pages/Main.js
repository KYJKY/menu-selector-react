import React from 'react';

function Main() {
    return (
        <main class="box-menu">
            <button id="menu1" class="menu">
                <h3>장부식당<br />돌림판</h3>
                <div><img src="public/images/bet.png" alt="메뉴(돌림판)" class="img-menu" /></div>
            </button>
            <button id="menu2" class="menu">
                <h3>점심메뉴<br />랜덤슬롯</h3>
                <div><img src="public/images/slot-machine.png" alt="메뉴(룰랫)" class="img-menu" /></div>
            </button>
            <button id="menu3" class="menu">
                <h3>장부식당<br />지도</h3>
                <div><img src="public/images/location.png" alt="메뉴(지도)" class="img-menu" /></div>
            </button>
            <button id="menu4" class="menu">
                <h3>장부식당<br />메뉴정보</h3>
                <div><img src="public/images/restaurant.png" alt="메뉴(식당정보)" class="img-menu" /></div>
            </button>
        </main>
    );
}

export default Main;