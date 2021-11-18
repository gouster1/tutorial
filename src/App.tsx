import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="head">
        헤더
        <ruby>
          공간<rt>space</rt>
        </ruby>
      </header>
      <nav>네비게이션 공간</nav>
      <aside>어사이드 공간</aside>
      <main>
        <article>
          <h1>TEST</h1>
          <ul>
            <li>테스트1</li>
            <li>테스트2</li>
            <li>테스트3</li>
          </ul>
        </article>
      </main>
      <footer>
        푸터 공간
        <address>ddd</address>
      </footer>
    </div>
  );
}

export default App;
