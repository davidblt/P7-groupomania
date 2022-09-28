import React from 'react';
// composants pour créer une navigation :
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Banner from './components/Banner';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					/* si chemin est l'accueil (/), alors fournit le composant "element" :
					*/
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</BrowserRouter>
			<Banner />
		</div>
	);
};

export default App;
