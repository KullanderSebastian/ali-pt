import './styles.scss';
import Index from './components/Index';
import ContactMe from './components/ContactMe';

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
			<Router>
				<Routes>
					<Route element={<Index />} path="/" exact />
					<Route element={<ContactMe />} path="/kontakt" />
				</Routes>
			</Router>
        </div>
    );
}

export default App;
