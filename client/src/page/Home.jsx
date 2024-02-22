import React, { useState } from "react";
import Posts from "../components/Posts";
import img1 from "../images/agri_img.jpg";
import img2 from "../images/art_img.jpeg";
import img3 from "../images/business_img.jpeg";
import img4 from "../images/edu_img.jpeg";
import img5 from "../images/invest_img.jpeg";
import img6 from "../images/ent_img.jpeg";

const Home = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <>
      <div className="container1">
        <div className="blur-background"></div>
        <div className="centered-text">
          <p>Explore Clinical AI Assistance</p>
        </div>
      </div>
      <h4
        className="articlesHeading"
        style={{ marginLeft: "2.5%", marginRight: "2.5%", width: "95%" }}
      >
        Featured Topics
      </h4>

      <div className="topics">
        <div
          className="topic_container frst"
          onClick={() => handleTopicSelect("Health Condition")}
        >
          <img
            src={img1}
            className={`topic ${
              selectedTopic === "Health Condition" ? "selected" : ""
            }`}
          />
          <div class="overlay-text">Health Condition</div>
        </div>
        <div
          className="topic_container scnd"
          onClick={() => handleTopicSelect("Fitness")}
        >
          <img
            src={img2}
            className={`topic ${selectedTopic === "Fitness" ? "selected" : ""}`}
          />
          <div class="overlay-text">Fitness</div>
        </div>
        <div
          className="topic_container thrd"
          onClick={() => handleTopicSelect("Nutrition")}
        >
          <img
            src={img3}
            className={`topic ${
              selectedTopic === "Nutrition" ? "selected" : ""
            }`}
          />
          <div class="overlay-text">Nutrition</div>
        </div>
        <div
          className="topic_container frth"
          onClick={() => handleTopicSelect("Mental Health")}
        >
          <img
            src={img4}
            className={`topic ${
              selectedTopic === "Mental Health" ? "selected" : ""
            }`}
          />
          <div class="overlay-text">Mental Health</div>
        </div>
        <div
          className="topic_container ffth"
          onClick={() => handleTopicSelect("Holistic Health")}
        >
          <img
            src={img5}
            className={`topic ${
              selectedTopic === "Holistic Health" ? "selected" : ""
            }`}
          />
          <div class="overlay-text">Holistic Health</div>
        </div>
        <div
          className="topic_container six"
          onClick={() => handleTopicSelect("Ayurveda")}
        >
          <img
            src={img6}
            className={`topic ${
              selectedTopic === "Ayurveda" ? "selected" : ""
            }`}
          />
          <div class="overlay-text">Ayurveda</div>
        </div>
      </div>
      <Posts selectedTopic={selectedTopic} />
    </>
  );
};

export default Home;
