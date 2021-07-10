// import rainbowLogo from '../public/RainbowLaptop.png';
import './App.scss';

function App() {
	return ( <div className="App">
		<header className="App-header">
			<img src={process.env.PUBLIC_URL + '/RainbowLaptop.png'}
				className="App-logo"
				alt="logo" />
			<h1>COMING SOON</h1>
		</header>
	</div>
	);
}

export default App;