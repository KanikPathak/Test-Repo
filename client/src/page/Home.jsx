import React, { useState } from 'react'
import Posts from '../components/Posts'

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
            <p>Your text here</p>
        </div>
      </div>
      <h4 className='articlesHeading' style={{marginLeft: "2.5%", marginRight: "2.5%", width: "95%"}}>
          Featured Topics
      </h4>
      <div className='topics'>
          <div className={`topic ${selectedTopic === 'Health Condition' ? 'selected' : ''}`} onClick={() => handleTopicSelect('Health Condition')}>Health Condition</div>
          <div className={`topic ${selectedTopic === 'Fitness' ? 'selected' : ''}`} onClick={() => handleTopicSelect('Fitness')}>Fitness</div>
          <div className={`topic ${selectedTopic === 'Nutrition' ? 'selected' : ''}`} onClick={() => handleTopicSelect('Nutrition')}>Nutrition</div>
          <div className={`topic ${selectedTopic === 'Mental Health' ? 'selected' : ''}`} onClick={() => handleTopicSelect('Mental Health')}>Mental Health</div>
          <div className={`topic ${selectedTopic === 'Holistic Health' ? 'selected' : ''}`} onClick={() => handleTopicSelect('Holistic Health')}>Holistic Health</div>
          <div className={`topic ${selectedTopic === 'Ayurveda' ? 'selected' : ''}`} onClick={() => handleTopicSelect('Ayurveda')}>Ayurveda</div>
      </div>
      <Posts selectedTopic={selectedTopic}/>
      
    </>
  )
}

export default Home