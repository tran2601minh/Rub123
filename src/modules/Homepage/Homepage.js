import InfoImg1 from "resource/s.jpg";
import InfoImg2 from "resource/screen.jpg";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="Homepage">
      <section className="main-bg">
        <div>
          <h1>
            <span>HEALTHIER</span> AND HAPPIER TODAY
          </h1>
          <button className="sign-up">SIGN UP NOW</button>
          <button className="login">LOG IN</button>
        </div>
      </section>

      <section className="general-info">
        <div>
          <img src={InfoImg1} alt="practice-img" />
        </div>
        <div>
          <h1>Welcome to</h1>
          <h3 className="logo-text black">
            FIT<span>4</span>HAPPINESS
          </h3>
          <p>
            Are you just started to train and don't know where to start? Or you
            have been training for awhile but haven't see results yet?
          </p>
          <p>
            We know it's hard to keep your pace on your fitness journey. And we
            made it our mission to help you to overcome it.
          </p>
          <p>
            Start your journey today with our <span>5000+</span> members.{" "}
          </p>
        </div>
        <div>
          <h4>Why We Created Fit4Happiness ?</h4>
          <p>
            Fit4Happiness was created to help those who are trying to lose
            weight, gain weight and become stronger. Having a healthier body and
            mind is what we believe help people to have a happier and enjoyable
            life. We customize training plan for you so there is no more excuse.
          </p>
          <p>We hope you’ll join us.</p>
        </div>
        <div>
          <img src={InfoImg2} alt="weight-img" />
        </div>
      </section>
    </div>
  );
}

export default Homepage;
