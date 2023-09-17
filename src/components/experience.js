import React from 'react';
import '../styles/experience.css';

const Experience = () => {

  return (
    <>
      <div id="experience">
        <div className="experience-subtitle">#Experience</div>
        <ul class="jobs">
        <li className='job1'>
            <div className='joblist-job-title'>
              <li>Learner @ Digital Talent Scholarship</li>
            </div>
            <div className='joblist-duration'>June 2023 - September 2023</div>
            <div className='job-description'>
              <li>-	Worked on projects within Grow with Google, especially user research and design interaction</li>
            </div>
          </li>
          <li className='job2'>
            <div className='joblist-job-title'>
              <li>Learner @ Kampus Merdeka</li>
            </div>
            <div className='joblist-duration'>August 2021 - January 2022</div>
            <div className='job-description'>
              <li>-	Worked on a capstone project within the Dicoding platform by creating a functional website with the theme Resource Sharing & User Generated Content</li>
            </div>
          </li>
          <li className='job3'>
            <div className='joblist-job-title'>
              <li>Laboratory Assistant @ Universitas Muhammadiyah Purwokerto</li>
            </div>
            <div className='joblist-duration'>July 2020 - September 2021</div>
            <div className='job-description'>
              <li>-	Conducted lectures under Mr. Abdul Haris Mulyadi by assessing student performance</li>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Experience

