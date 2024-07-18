import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Home';
import Count from './Count';
import Footer from './components/Footer';
import Form from './Form';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/form" element={<Form />} />
				{/*<Route path="/form/confirm" element={<Confirm />} />
				<Route path="/form/completed" element={<Completed />} /> */}
				<Route path="/count" element={<Count />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
