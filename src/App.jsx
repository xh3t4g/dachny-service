import { HomePage } from "./pages/HomePage";
import { GalleryPage } from "./pages/GalleryPage";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
    )
}

export default App;
