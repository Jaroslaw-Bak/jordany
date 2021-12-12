import "../stylesheets/aboutme.css";
import aboutmeimg from '../images/aboutmephoto.jpg'

const AboutMe = () => {
    return (
        <div className="about">
            <img className="aboutme-img" src={aboutmeimg} alt='aboute me foto' />
            <div className="aboutme-description">My name is Toby. I'm a webdesigner working for a digital creative agenty called Creately. Sometimes i create websites, posters, ecards. I like photography and I am a big fan of Jordan.
            </div>
        </div>
    )
}

export default AboutMe;