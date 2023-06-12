import Article1Img from "resource/article1.jpg";
import Article2Img from "resource/article2.jpg";
import Article3Img from "resource/article3.png";
import AngleLeft from "resource/angle-left-solid.svg";
import AngleRight from "resource/angle-right-solid.svg";
import Exercise1Img from "resource/exercise1.jpg";
import Exercise2Img from "resource/exercise2.jpg";
import Exercise3Img from "resource/exercise3.jpg";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog-page">
      <h1>LATEST ARTICLES</h1>
      <p>
        Update yourself frequently about our amazing insights and knowledge
        about fitness.
      </p>
      <section className="articles-container">
        <article>
          <img src={Article1Img} alt="article1-img" />
          <p className="subtitle-1 tag">#GettingStarted</p>
          <h4>
            Health Benefits of Fitness and Exercise, and How to Get Started
          </h4>
          <p className="subtitle-2">
            Fundamental knowledge you need to know about fitness and how to get
            started with training
          </p>
          <p className="subtitle-2 date">January 14, 2023</p>
        </article>
        <article>
          <img src={Article2Img} alt="article2-img" />
          <p className="subtitle-1 tag">#Pregnance #Guide</p>
          <h4>Pregnancy Training Guide with videos</h4>
          <p className="subtitle-2">
            Effective and safe workout guide for all pregnancy women
          </p>
          <p className="subtitle-2 date">January 10, 2023</p>
        </article>
        <article>
          <img src={Article3Img} alt="article1-img" />
          <p className="subtitle-1 tag">#Questions #Gym</p>
          <h4>
            Should you workout at home or at gym. The differences and benefits
          </h4>
          <p className="subtitle-2">
            Here are the differences between working out at home and at the gym
            according to our research.
          </p>
          <p className="subtitle-2 date">January 5, 2023</p>
        </article>
      </section>
      <h4>Read more</h4>
      <section className="exercises-container">
        <h1>Exercise search</h1>
        <p>Browse every exercise tutorial with our experts</p>
        <div className="exercises-list">
          <img src={AngleLeft} alt="arrow-left" />
          <div className="exercise">
            <img src={Exercise1Img} alt="exercise1" />
            <h5>Squats Form Tutorial</h5>
          </div>
          <div className="exercise">
            <img src={Exercise2Img} alt="exercise2" />
            <h5>Lunges Tutorial</h5>
          </div>
          <div className="exercise">
            <img src={Exercise3Img} alt="exercise3" />
            <h5>Bike Cardio Routine</h5>
          </div>
          <img src={AngleRight} alt="arrow-right" />
        </div>
      </section>
    </div>
  );
}

export default Blog;
