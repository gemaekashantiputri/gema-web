import React from 'react';
import '../styles/work.css';
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";

const Work = () => {

  return (
    <>
      <div id="work">
        <div className="work-subtitle">#Work</div>
        <div className="project-container">
          <ul className='projects-grid'>
             <li className='projects-card'>
              <div className='card-header'>
                <div className='folder-icon'>
                  <FolderOpenRoundedIcon
                    style={{ fontSize: 35 }}
                  ></FolderOpenRoundedIcon>
                </div>
              </div>
              <div className='work-img'>
                <img src='/assets/thumb.jpg' alt='thumb'/>
              </div>
              <div className='card-title'>
              <a href="https://www.behance.net/gallery/157876395/Re-Design-University-Muhammadiyah-Purwokerto-Attendance">
              Re-Design University Muhammadiyah Purwokerto Attendance</a></div>
              <div className='card-desc'>An application for student attendance in each subject at University Muhammadiyah Purwokerto</div>
              <div className='card-tech'>Google Form, Figma</div>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
}

export default Work
