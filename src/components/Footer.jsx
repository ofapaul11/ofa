import { NoticeForm } from "./NoticeForm"

export const Footer = () => {
    return (
        <footer id="Contact us">
            <div className="footer-container"> 
                <NoticeForm />

                <div className="about-footer">
                <p className="footer-title">Please add your review opposite.</p>
                <p className="footer-txt">
                    © 2023 OFA - All rights reserved
                </p>
                <div className="medias-footer">
                    <a href="https://x.com/@NoirMr42974">
                        <img src="ressources/x.svg" alt="x icon" />
                    </a>
                    <a href="https://t.me/Noirloseille" target="_blank" rel="noopener noreferrer">
                        <img src="ressources/telegram.svg" alt="telegram" />
                    </a>
                </div>
            </div>

            

        </div>
        </footer>
    )
}