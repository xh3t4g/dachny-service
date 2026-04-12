import '../css/index.css'
import { Link } from 'react-router-dom'
import { scrollToTop } from '../utils/scrollToTop'

export function HomePage () {

    return <>

    <header>
        <div className="header_container">
            <div className="header_text_container">
                <div className="Kavro_title_header">
                    <span><h3>ДАЧНЫЙ</h3></span>

                    <h3>сервис</h3>
                </div>

                <span>Услуги в твоем районе</span>
            </div>
        </div>
    </header>

    <main>
        <section className="section_Our_services">
            <div className="card_container">
                <div className="card_Services">
                    <div className="card_container_title_services">
                    <h3>Чем можем помочь</h3></div>

                    <ul className='card_services_list services_list'>
                        <li>
                            <Link to="/service/pokos_travi" onClick={scrollToTop}>🌿 Покос травы</Link>
                        </li>
                        <li>
                            <Link to="/service/vyvoz_musora" onClick={scrollToTop}>🗑️ Вывоз мусора</Link>
                        </li>
                        <li>
                            <Link to="/service/ochistka_ychastka" onClick={scrollToTop}>🧹 Чистка участка</Link>
                        </li>
                        <li>
                            <Link to="/service/virybka_dereviev" onClick={scrollToTop}>🪓 Вырубка деревьев</Link>
                        </li>
                        <li>
                            <Link to="/service/demontazh" onClick={scrollToTop}>🔨 Демонтаж</Link>
                        </li>
                        <li>
                            <Link to="/service/raznorabochie" onClick={scrollToTop}>🔧 Разнорабочие</Link>
                        </li>
                    </ul>
                </div>

                <div className="Card_contact_us">
                    <div className="card_container_title_contacts">
                        <h3>Обсудить заказ</h3>
                    </div>

                    <ul className="card_services_list_b">
                        <li>
                            <a href="https://t.me/cnskfho" className="Telegram" target="_blank" rel="noopener">Написать в Telegram</a>
                        </li>
                        <li>
                            <a href="https://wa.me/79931849236" className="WhatsApp" target="_blank" rel="noopener">Написать в WhatsApp</a>
                        </li>
                        <li>
                            <a href="tel:+79931849236" className="Phone" target="_blank" rel="noopener">Позвонить</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="header_link_gallery">
                <nav>  
                    <Link to="/gallery" onClick={() => setTimeout(() => window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    }), 50)}>Наши работы</Link>
                </nav>
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
