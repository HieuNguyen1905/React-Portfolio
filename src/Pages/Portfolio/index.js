import React from 'react';
import './styles.css'

export default function About() {
  return (
    <div className='portfolio'>
      <h1>Portfolio</h1>
      <div className='projects'>


        <div className='project'>
          
            <img alt='' src={require('../../picture/api.png')} />
          
          <div className='overlay'>
          <a href='https://github.com/HieuNguyen1905/NoSQL-Social-Network-API'>
            <div className='project-name'>Social Network API</div>
            </a>
          </div>
        </div>



        <div className='project'>
          
            <img alt='' src={require('../../picture/Game.jpg')} />
          
          <div className='overlay'>
          <a href='https://github.com/jhnwoo-dev/hero-clash'>
            <div className='project-name'>Hero Clash</div>
            </a>
          </div>
        </div>



        <div className='project'>
          
            <img alt='' src={require('../../picture/mongo.png')} />
          
          <div className='overlay'>
          <a href='https://github.com/HieuNguyen1905/NoSQL-Social-Network-API'>
            <div className='project-name'>Mongo DB</div>
            </a>
          </div>
        </div>



        <div className='project'>
          
            <img alt='' src={require('../../picture/saveyourseat.jpg')} />
          
          <div className='overlay'>
          <a href='https://github.com/ClaireEberle/Save-Your-Seat'>
            <div className='project-name'>Save Your Seat</div>
            </a>
          </div>
        </div>


        <div className='project'>
          
            <img alt='' src={require('../../picture/tech-blog.png')} />
          
          <div className='overlay'>
          <a href='https://github.com/HieuNguyen1905/module14-tech-log'>
            <div className='project-name'>Tech Blog</div>
            </a>
          </div>
        </div>

        <div className='project'>
          
            <img alt='' src={require('../../picture/weather.jpg')} />
         
          <div className='overlay'>
          <a href='https://github.com/HieuNguyen1905/weather-dashboard'>
            <div className='project-name'>Weather Dashboard</div>
            </a>
          </div>
        </div>


      </div>
    </div>
  );
}