import React from 'react';
import './Home.css'; // このファイルで動画背景のスタイルを設定
import backgroundVideo from '../assets/background.mp4';

const Home: React.FC = () => {
  return (
    <div className="home">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome to 隠Study</h1>
        <p>Learn and grow with our innovative platform!</p>
      </div>
    </div>
  );
};

export default Home;