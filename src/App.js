import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// PAGES
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Driver from './pages/Driver';
import Drivers from './pages/Drivers';
import RaceResults from './pages/RaceResults';
// COMPONENTS
import Navbar from './components/layout/Navbar';
import Slider from './components/layout/Slider';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
// CONTEXT AND PROVIDERS
import { F1Provider } from './context/f1/F1Context';
import { AlertProvider } from './context/alert/AlertContext';

function App() {
  return (
    <F1Provider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main>
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/drivers" element={<Drivers />} />
                <Route path="/results" element={<RaceResults />} />
                <Route path="/driver/:driverId" element={<Driver />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </F1Provider>
  );
}

export default App;
