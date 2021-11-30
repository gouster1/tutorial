import "./App.css";
import Header from "./components/organisms/header/header";
import Nav from "./components/organisms/nav/nav";
import Aside from "./components/organisms/aside/aside";
import Main from "./components/organisms/main/main";
import Footer from "./components/organisms/footer/footer";

function App() {
	return (
		<div className="container">
			<Header />
			<Nav />

			<div className="under_header">
				<Aside />
				<Main />
			</div>

			<Footer />
		</div>
	);
}

export default App;
