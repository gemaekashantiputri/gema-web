import React from 'react';
import '../styles/experience.css';

const Experience = () => {

  return (
    <>
      <div id="experience">
        <div className="experience-subtitle">#Experience</div>
        <ul class="jobs">
          <li>
            <div className='joblist-job-title'>
              <li>Learner @ Kampus Merdeka</li>
            </div>
            <div className='joblist-duration'>August 2021 - January 2022</div>
            <div className='job-description'>
              <li>Independent Studies are short courses to master cross-departmental applied knowledge from experts in their fields from Kampus Merdeka. I signed up for independent study of Front-End Web Developer and Back-End at Dicoding Indonesia. learn about website development from both front-end and back-end development. also gained dicoding certificate</li>
            </div>
          </li>
          <li>
            <div className='joblist-job-title'>
              <li>Laboratory Assistant @ Universitas Muhammadiyah Purwokerto</li>
            </div>
            <div className='joblist-duration'>July 2020 - September 2021</div>
            <div className='job-description'>
              <li>make report form application computer class for first-year student</li>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Experience

