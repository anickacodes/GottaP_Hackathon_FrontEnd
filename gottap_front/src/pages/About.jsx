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
        </section>
      </div>
    </div>
  );
};

export default About;
