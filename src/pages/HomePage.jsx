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
                <div className="card_trova">
                    <div className="card_container_title_trova">
                    <h3>🌿 Покос травы</h3></div>

                    <ul className='card_services_list trova_list'>
                        <li>
                            <Link to="/service/kosim_travy" onClick={scrollToTop}>Косим траву</Link>
                        </li>
                        <li>Убираем траву</li>
                        <li>Вывозим мусор</li>
                        <li>Чистим участок</li>
                        <li>Подравниваение</li>
                        <li>Удаление сорняков</li>
                    </ul>
                </div>

                <div className="card_bild">
                    <div className="card_container_title_bild">
                        <h3>🛠 Разнорабочие</h3>
                    </div>

                    <ul className="card_services_list bild_list">
                        <li>Вырубка деревьев</li>
                        <li>Демонтаж</li>
                        <li>Вывоз хлама</li>
                        <li>Уборка после работ</li>
                        <li>Перенос и погрузка</li>
                        <li>Мелкий ремонт</li>
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

            <div className="news">
                <a href="https://t.me/cnskfho" className="Telegram" target="_blank" rel="noopener">Написать в Telegram</a>

                <a href="https://wa.me/79931849236" className="WhatsApp" target="_blank" rel="noopener">Написать в WhatsApp</a>

                <a href="tel:+79931849236" className="Phone" target="_blank" rel="noopener">Позвонить</a>
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
