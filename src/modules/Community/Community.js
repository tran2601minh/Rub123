import UserImg from "resource/user-solid.svg";
import CommentImg from "resource/comments-solid.svg";
import HeartImg from "resource/heart-solid.svg";
import UserImg1 from "resource/user1.jpg";
import UserImg2 from "resource/user2.jpg";
import UserImg3 from "resource/user3.jpg";
import UserImg4 from "resource/user4.jpg";
import "./Community.css";

function Community() {
  return (
    <div className="forum-page">
      <section className="header">
        <h1>OUR CHAT-FORUM</h1>
        <p>You are not alone in this journey!</p>
      </section>
      <section className="comment-section">
        <div className="filter">
          <button>Forums</button>
          <input placeholder="Filters" />
        </div>
        <div className="comment-list">
          <div className="comment-container">
            <img src={UserImg} alt="user-img" />
            <div className="comment">
              <p>
                Result update on my 2 weeks training. Am I on the right track?
              </p>
              <p className="info">By L, Jan 14</p>
            </div>
            <div className="actions">
              <img src={CommentImg} alt="comment-img" />
              <img src={HeartImg} alt="heart-img" />
            </div>
          </div>
          <div className="comment-container">
            <img src={UserImg} alt="user-img" />
            <div className="comment">
              <p>
                What is everyone thought on intermediate fasting? Would it cause
                muscle loss?
              </p>
              <p className="info">By A, Jan 10</p>
            </div>
            <div className="actions">
              <img src={CommentImg} alt="comment-img" />
              <img src={HeartImg} alt="heart-img" />
            </div>
          </div>
          <div className="comment-container">
            <img src={UserImg} alt="user-img" />
            <div className="comment">
              <p>
                Hi, I'm new to F4H and need some advice. I'm 32 year old and I
                have been considered overweight for 9 years. I used...
              </p>
              <p className="info">By M, Jan 9</p>
            </div>
            <div className="actions">
              <img src={CommentImg} alt="comment-img" />
              <img src={HeartImg} alt="heart-img" />
            </div>
          </div>
          <div className="comment-container">
            <img src={UserImg} alt="user-img" />
            <div className="comment">
              <p>WHICH PROTEIN POWDER IS BETTER????</p>
              <p className="info">By S, Jan 5</p>
            </div>
            <div className="actions">
              <img src={CommentImg} alt="comment-img" />
              <img src={HeartImg} alt="heart-img" />
            </div>
          </div>
          <div className="comment-container">
            <img src={UserImg} alt="user-img" />
            <div className="comment">
              <p>New year resolution squad! Fitness newbie here</p>
              <p className="info">By K, Jan 4By</p>
            </div>
            <div className="actions">
              <img src={CommentImg} alt="comment-img" />
              <img src={HeartImg} alt="heart-img" />
            </div>
          </div>
        </div>
        <div className="actions">
          <button>Previous</button>
          <button>Next page</button>
        </div>
      </section>
      <section className="feedback-section">
        <h2>User Feedbacks</h2>
        <p>Here is some motivation for your fitness journey</p>
        <div className="feedbacks-container">
          <div className="feedback">
            <div className="user-img">
              <img src={UserImg1} alt="user-img" />
            </div>
            <p className="subtitle-2">
              "I love Fit4Happiness. It is my number one fitness site"
            </p>
            <p className="subtitle-2">- Amanda, 30</p>
          </div>
          <div className="feedback">
            <div className="user-img">
              <img src={UserImg2} alt="user-img" />
            </div>
            <p className="subtitle-2">
              "My life changed ever since I started to use Fit4Happiness. I can
              see the change from inside out and I couldn't ask for more"
            </p>
            <p className="subtitle-2"> - Chelsea, 22</p>
          </div>
          <div className="feedback">
            <div className="user-img">
              <img src={UserImg3} alt="user-img" />
            </div>
            <p className="subtitle-2">
              "I became more confident with my body ever since I started
              training with FIt4Happiness. I achieved my fitness goal faster"
            </p>
            <p className="subtitle-2"> - Kevin, 28</p>
          </div>
          <div className="feedback">
            <div className="user-img">
              <img src={UserImg4} alt="user-img" />
            </div>
            <p className="subtitle-2">
              "I lost a certain amount of weight that I could never thought I
              would be able to. All thanks to Fit4Happiness."
            </p>
            <p className="subtitle-2"> - Hannah, 25</p>
          </div>
        </div>
        <p>
          What is your experience with Fit4Happiness?{" "}
          <span>Share with us now</span>
        </p>
      </section>
    </div>
  );
}

export default Community;
