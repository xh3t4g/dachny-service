import { HomePage } from "./pages/HomePage";
import { GalleryPage } from "./pages/GalleryPage";
import { Routes, Route } from "react-router-dom";
import { ServicePage } from "./pages/service/ServicePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/service/:id" element={<ServicePage />} />
        </Routes>
    )
}

export default App;
