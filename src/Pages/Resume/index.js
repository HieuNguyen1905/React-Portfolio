import React from 'react';
import './styles.css'
export default function About() {

  const handleClick = ()=>{
    fetch('Hieu-Nguyen.pdf').then(response =>{
      response.blob().then(blob=>{
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Hieu-Nguyen.pdf';
        alink.click();
      })
    })
  }

  return (
    <div className='resume'>
      <h1>Resume</h1>
      <button onClick={handleClick}>Download my resume</button>
      <h1>Front-end Proficiencies</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h1>Back-end Proficiencies</h1>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}