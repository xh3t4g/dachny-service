import { useParams ,Link, useNavigate } from "react-router-dom";
import '../../css/service.css';
import { services } from "../../data/service";
import { serviceSteps } from "../../data/service";
import { serviceAbout } from "../../data/service";
import { scrollToTop } from "../../utils/scrollToTop";

export function ServicePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = services.find(s => s.id === id);

    if (!service) {
        navigate('/')
        return null;
    }
    
    return <>
    
        <header>
            <div className="header_container">
                <div className="header_text_container">
                    <div className="Kavro_title_header_servisce">
                        <h3>{service.title}</h3>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <section className="section_Our_services_ser">
                <div className="service_card_container">
                    <div className="card_one">
                        <div className="card_one_title">
                            <h3>👥 О нас</h3>

                            <p>
                                {serviceAbout}
                            </p>
                        </div>
                    </div>
                    

                    <div className="card_two">
                        <div className="card_two_title">
                            <h3>📋 Что входит</h3>


                            <ol className="service_list two_list">
                                {service.includes.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    

                    <div className="card_free">
                        <div className="card_free_title">
                            <h3>⚙️ Как это работает</h3>

                            <ul className="service_list free_list">
                                {serviceSteps.map(step => (
                                    <li key={step}>{step}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <div className="link_back">
            <nav>  
                <Link to="/" onClick={scrollToTop}>Назад</Link>
            </nav>
        </div>

        <div className="footer_gradient"></div>
        
        <footer>
            <div className="footer_contetnt">
                <span>Kavro © 2026 - Делаем просто</span>
            </div>
            <div className="fog"></div>
        </footer>

    </>
}
