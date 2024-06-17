import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profile from './Profile';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

function App() {
    return (
        <Router>
            <div className="bg-gray-900 min-h-screen text-white flex flex-col">
                <nav className="p-4 bg-gray-800">
                    <ul className="flex space-x-4 justify-center">
                        <li className="relative group">
                            <Link to="/" className="text-lg font-semibold">
                                Profilom
                            </Link>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </li>
                        <li className="relative group">
                            <Link to="/about" className="text-lg font-semibold">
                                Rólam
                            </Link>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </li>
                        <li className="relative group">
                            <Link to="/projects" className="text-lg font-semibold">
                                Projektjeim
                            </Link>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </li>
                    </ul>
                </nav>
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Profile />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;