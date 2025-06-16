import React from 'react';
import './Main.css'; 
import Men from "./assets/man.png";

// Array of images and their corresponding names
const imageData = [
  { src: Men, name: 'Men' },
  { src: Men, name: 'Women' },
  { src: Men, name: 'Kids' },
  { src: Men, name: 'Skin Care' },
  { src: Men, name: 'Wellness' },
  { src: Men, name: 'Wellness' },
  { src: Men, name: 'Wellness' },
  { src: Men, name: 'Wellness' }
];

function Main() {
  return (
    <div className="image-container">
      {imageData.map((data, index) => (
        <div key={index} className="image-item">
          <img src={data.src} alt={data.name} />
          <span>{data.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Main;
