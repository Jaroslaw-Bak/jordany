import "../stylesheets/aboutme.css";
import aboutmeimg from '../images/aboutmephoto.jpg';
import { useTranslation } from "react-i18next";

const AboutMe = () => {

    const {t} = useTranslation();
    return (
        <div className="about">
            <img className="aboutme-img" src={aboutmeimg} alt='aboute me foto' />
            <div className="aboutme-description">{t('AboutMe.description')}
            </div>
        </div>
    )
}

export default AboutMe;