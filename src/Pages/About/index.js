import React from 'react';
import './styles.css'

export default function About() {
  return (
    <div className='home'>
      <div className='posts'>
        <div className='post'>
        <h1>Hieu Nguyen</h1>
        <img alt='' src={require("../../picture/passport.jpg")}/>
        <h3>Full Stack Website Developer</h3>
        </div>
        <div className='intro'>
        <p>Full stack developers are effectively jacks of all trades -- they expertly combine both front-end and back-end development for websites and software applications. Front-end development focuses on the user facing side of the website or software and is everything that the user can interact with, while back-end is the part that allows the front-end to exist, consisting of a server, application, and a database. Full stack is the best of both worlds, utilizing both skills from front-end and back-end development.

          Utilizing their knowledge of coding programs, full stack developers collaborate with graphic designers to create the front-end of the website or software to match the company’s tone and brand. They oversee projects as part of the business’s IT department, and dig into any bugs and technical issues in their code based on user reports and self-review.

          Now, lets dive in to see what successful full stack developer resumes look like in 2023. We’ll go over six different types of full stack roles, and how you can capitalize on your relevant work history, transferable skills, and education. Afterwards, we’ll go over a list of action verbs to make a strong impression in your experience section and a list of prominent hard skills that recruiters are looking for in full stack developers.</p>
          </div>
      </div>
    </div>
  );
}