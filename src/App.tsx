import React from "react";
import "./App.css";

function App() {
	return (
		<div className="container">
			<header className="header">
				<h1>헤더 공간</h1>
			</header>
			<nav className="header_nav">
				<button>1</button>
				<button>2</button>
				<button>3</button>
				<button>4</button>
				<button>5</button>
			</nav>

			<div className="under_header">
				<div className="side_space"></div>
				<aside className="aside">
					<h2>어사이드 공간</h2>
					<ul>
						<li>첫번째</li>
						<li>두번째</li>
						<li>세번째</li>
					</ul>
				</aside>
				<main className="main">
					<article>
						<h1>TEST</h1>
						<ul>
							<li>
								테스트1
								<br />
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Voluptas, atque, ut nesciunt aliquid iure architecto iusto quia
								fugit ullam pariatur neque aspernatur veniam eum impedit
								asperiores, libero distinctio. Labore, maxime.
							</li>
						</ul>
					</article>
				</main>
				<div className="side_space"></div>
			</div>

			<footer className="footer">
				<h1>푸터 공간</h1>
				<address>ddd</address>
			</footer>
		</div>
	);
}

export default App;
