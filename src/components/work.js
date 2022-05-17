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
                <span className="external-links">
                  <a className="github-icon" href="https://github.com/gemaekashantiputri/prewedding-web">
                    <GitHubIcon
                      style={{
                        fontSize: 20,
                        color: "var(--lightest-slate)"
                      }}
                    ></GitHubIcon>
                  </a>
                </span>
              </div>
              <div className='card-title'>PreWedding</div>
              <div className='card-desc'>prewedding is a website for ordering wedding organizer services with a progress report feature</div>
              <div className='card-tech'>JavaScript, React</div>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
}

export default Work
