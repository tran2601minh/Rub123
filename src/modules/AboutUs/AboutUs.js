import WeightImg from "resource/weight2.webp";
import LeadManager from "resource/leadmanager.jpg";
import TechLead from "resource/techlead.jpg";
import DesignLead from "resource/designlead.jpg";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <section className="about-us">
        <div>
          <h1>ABOUT US</h1>
          <p>Dear users,</p>
          <p>
            Our team created a website named fit4happiness.site. Our focus is
            fitness, more specifically bodybuilding. Our motivation comes from
            the backstory of Duong Tran, our lead manager, who overcame obesity
            as a teenager, with many difficulties in his training. Therefore,
            Duong himself and the Fit4Happiness team want to help new fitness
            trainers to have a more visible pathway to obtain consistent
            results. We name our site and company, Fit4Happiness, as we believe
            a healthy lifestyle is the fundamental material to create a life
            filled with happiness.
          </p>
          <p>- Fit4Happiness team</p>
        </div>
        <div>
          <img src={WeightImg} alt="balance-img" />
        </div>
      </section>
      <section className="team-member">
        <h2>Our Team Members</h2>
        <div>
          <div>
            <img src={LeadManager} alt="lead-manager" />
            <h5>DUONG TRAN</h5>
            <p className="subtitle-1">Lead Manager</p>
            <p className="subtitle-1">
              " Spending his teens in the gym but wasted a lot of time in the
              wrong direction, he would love to help new trainers to avoid
              mistakes and optimize the training process. "
            </p>
          </div>
          <div>
            <img src={TechLead} alt="tech-lead" />
            <h5>NAM NGUYEN</h5>
            <p className="subtitle-1">Tech Lead</p>
            <p className="subtitle-1">
              " Nam believes that fitness is an important and prominent subject,
              especially for the young generation. It is beneficial if there is
              an application that can help tracking, analyze progress and advise
              a suitable practice schedule for specific body types and
              goals.•Relevant skills & Background: . "
            </p>
          </div>
          <div>
            <img src={DesignLead} alt="design-lead" />
            <h5>ANH LUU</h5>
            <p className="subtitle-1">Design Lead</p>
            <p className="subtitle-1">
              " Fitness has been one of the main concerns of people for
              centuries. Learning how to stay healthy through exercise and
              eating right can be confusing in this modern age. That is why Anh
              believes there would always be a need for a digital fitness
              tracker/helper. "
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
