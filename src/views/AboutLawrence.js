import React from 'react';
import profile from '../images/IMG_1447.jpg';

const AboutLawrence = () => {
  return (
    <main className='profile-container'>
      <div className='img-container'>
        <img src={profile} alt='Lawrence Adams' className='profile-img' />
      </div>

      <h3>lawrence Adams</h3>

      <h4 className='profile-txt txt-center'>
        I am an entrepreneur looking to join a team.
      </h4>
      <p className='profile-txt'>
        People all around the world of different cultures and communities are
        connecting through various digital platforms. This is exciting to me
        because development is uniquely positioned to influence how information
        is presented and made available to the people.
      </p>
      <p className='profile-txt'>
        I want to be a part of making the world a more equal and accessible
        place. This was a goal I knew I could not accomplish myself. So, I set
        out to build my network and education so I could join a likeminded team.
        My professional education foundation is Grand Circus and Scrum Alliance.
        Scrum Alliance taught me about the Agile principles and processes that
        so many tech teams use to develop solutions. The Grand Circus Bootcamp
        taught me the basic programming languages, Component Driven Development
        and how to learn new technologies as they become available. Best of all
        Grand Circus taught me how to collaborate professionally in a remote
        environment.{' '}
      </p>
      <p className='profile-txt bold'>
        I am a valuable asset because I am unique. My goals and thoughts are
        focused on a wholistic understanding of each situation. I take the time
        to reflect on each problem and I try to find the place where I can best
        contribute. I am a team first person and helping a team accomplish its
        goal is my number one skill.
      </p>
    </main>
  );
};

export default AboutLawrence;
