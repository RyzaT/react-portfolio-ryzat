import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';

function App() {
    return (
        <Router>
            <div>
                <NavTabs />
                {/* Wrap Route elements in Routes component */ }
                <Routes>
                    {/* Define Routes using the Route components at different paths */}
                    {/* Define a default route that will render the Home component */}
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    {/* Define a route that will have descendant routes */}
                    <Route path="contact/*" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;