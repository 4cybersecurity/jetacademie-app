import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Homepage from "./pages/HomePage/Homepage.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import DigitalLibrary from "./pages/DigitalLibraryPage/DigitalLibrary.jsx";
import Mentoring from "./pages/MentoringPage/MentoringPage.jsx";
import Layout from "./components/Layout.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="library" element={<DigitalLibrary />} />
                    <Route path="mentoring" element={<Mentoring />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
