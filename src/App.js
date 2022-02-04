import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// PAGES
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
// COMPONENTS
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { F1Provider } from './context/f1/F1Context';

function App() {
  return (
    <F1Provider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />

          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </F1Provider>
  );
}

export default App;
