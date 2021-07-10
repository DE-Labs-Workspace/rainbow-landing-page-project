import rainbowLogo from './rainbowLogo.jpg';
import './App.scss';

function App() {
	return ( <div className="App">
		<header className="App-header">
			<img src={rainbowLogo}
				className="App-logo"
				alt="logo" />
			<p>
				Rainbow Film Production is coming shortly near a PC/Mobile
			</p>
		</header>
	</div>
	);
}

export default App;