import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <h1>GottaP Team</h1>
      <div className="team-container">
        {/* Jesse's card section */}
        <section className="grid-container">
          <p>Jesse</p>
          <div>
            <img
              src="./src/assets/jesse.jpg"
              alt="Jesse's photo"
              width="25%"
            ></img>
          </div>
          <div>
            <span>
              <a href="http://linkedin.com/in/jessemchong">Linkedin</a>
            </span>
            <span>
              <a href="">GitHub</a>
            </span>
          </div>
        </section>

        {/* Kenia's card section */}
        <section className="grid-container">
          <p>Kenia</p>
          <div>
            <img
              src="./src/assets/kenia.jpg"
              alt="Kenia's photo"
              width="25%"
            ></img>
          </div>

          <span>
            <a href="https://www.linkedin.com/in/kenia-decoteau/">LinkedIn</a>
          </span>
          <span>
            <a href="https://github.com/KeniaD1">GitHub</a>
          </span>
        </section>

        {/* Natyka's card section */}
        <section className="grid-container">
          <p>Natyka</p>
          <div>
            <img
              src="./src/assets/natyka.jpg"
              alt="Natyka's photo"
              width="25%"
            ></img>
          </div>
          <div>
            <span>
              <a href="http://www.linkedin.com/in/natykajcallwood">LinkedIn</a>
            </span>
            <span>
              <a href="https://github.com/NatykaC">GitHub</a>
            </span>
          </div>
        </section>

        {/* Nicki's card section */}
        <section className="grid-container">
          <p>Nicki</p>
          <div>
            <img
              src="./src/assets/nicki.jpeg"
              alt="Nicki's photo"
              width="25%"
            ></img>
            <div>
              <span>
                <a href="https://www.linkedin.com/in/anickalewiss/">LinkedIn</a>
              </span>
              <span>
                <a href="https://www.github.com/anickacodes">GitHub</a>
              </span>
            </div>
          </div>
        </section>

        {/* Tyrell's card section */}
        <section className="grid-container">
          <p>Tyrell</p>
          <div>
            <img
              src="./src/assets/tyrell.jpeg"
              alt="Tyrell's photo"
              width="25%"
            ></img>
          </div>
          <span>
            <a href="http://www.linkedin.com/in/">LinkedIn</a>
          </span>
          <span>
            <a href="https://github.com/yulondawyatt">GitHub</a>
          </span>
        </section>

        {/* Yulonda's card section */}
        <section className="grid-container">
          <p>Yulonda</p>
          <div>
            <img
              src="./src/assets/yulonda.jpg"
              alt="Yulonda's Pic"
              width="25%"
            ></img>
          </div>
          <div>
            <span>
              <a href="https://www.linkedin.com/in/tyrell-kamara-oliver/">
                LinkedIn
              </a>
            </span>
            <span>
              <a href="">GitHub</a>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
