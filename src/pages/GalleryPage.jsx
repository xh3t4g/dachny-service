import { images } from '../components/GalleryIMG'
import { Card } from '../components/IMG_CARD'
import '../css/gallery.css'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../utils/scrollToTop'

export function GalleryPage() {

    return <>
    
            
    <header>
        <div className="header_container">
            <div className="header_text_container_gallery">
                <h3>⋆⋆ Результаты работ ⋆⋆</h3>
            </div>

            <div className="header_link_kover">
                <nav>  
                    <Link to="/" onClick={scrollToTop}>‹ Главное</Link>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <section >
            <div id="gallery_list">
                {images.map((image, index) => (
                    <Card key={index} image={image}/>
                ))}
            </div>
        </section>
    </main>

    <div className="footer_gradient"></div>
    
    
    <footer>
        <div className="footer_contetnt">
            <span>Kavro © 2026 - Делаем просто</span>
        </div>
        <div className="fog"></div>
    </footer>

    
    </>
}
