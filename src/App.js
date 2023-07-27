import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Verticals from './pages/Verticals';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import Layout from "./layout/layout";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Verticals" element={<Verticals />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
