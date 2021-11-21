import React from "react";
import "./App.css";

function App() {
	return (
		<div className="container">
			<header className="header">
				<h1>헤더 공간</h1>
			</header>
			<nav className="nav">
				<button>1</button>
				<button>2</button>
				<button>3</button>
				<button>4</button>
				<button>5</button>
			</nav>
			<main className="main">
				<aside className="aside">어사이드 공간</aside>
				<article>
					<h1>TEST</h1>
					<ul>
						<li>
							테스트1
							<br />
							다음 줄
						</li>
						<li>테스트2</li>
						<li>테스트3</li>
					</ul>
				</article>
			</main>
			<footer className="footer">
				푸터 공간
				<address>ddd</address>
			</footer>
		</div>
	);
}

export default App;
