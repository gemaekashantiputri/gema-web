import React from 'react';
import '../styles/work.css';
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";

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
                <img src='/assets/box.jpg' alt='box'/>
              </div>
              <div className='card-title'>
              <a href="https://www.behance.net/gallery/179013971/Box-App-Ordering-Album">
              Box App Ordering Album</a></div>
              <div className='card-desc'>An application for people who wants buy album to support Idol</div>
              <div className='card-tech'>Figma</div>
            </li>
            <li className='projects-card'>
              <div className='card-header'>
                <div className='folder-icon'>
                  <FolderOpenRoundedIcon
                    style={{ fontSize: 35 }}
                  ></FolderOpenRoundedIcon>
                </div>
              </div>
              <div className='work-img'>
                <img src='/assets/bootcamp.png' alt='bootcamp'/>
              </div>
              <div className='card-title'>
              <a href="https://www.behance.net/gallery/179026127/Bootcamp-App-Guide-Career?">
              Bootcamp App Guided Career</a></div>
              <div className='card-desc'>An application for people who wants learn new skill</div>
              <div className='card-tech'>Figma</div>
            </li>
            <li className='projects-card'>
              <div className='card-header'>
                <div className='folder-icon'>
                  <FolderOpenRoundedIcon
                    style={{ fontSize: 35 }}
                  ></FolderOpenRoundedIcon>
                </div>
              </div>
              <div className='work-img'>
                <img src='/assets/gems.png' alt='gems vet'/>
              </div>
              <div className='card-title'>
              <a href="https://www.behance.net/gallery/179028611/Gems-Vet-Register-Checkup?">
              Gem's Vet for pet checkup</a></div>
              <div className='card-desc'>An application for people who wants do pet checkup</div>
              <div className='card-tech'>Figma</div>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
}

export default Work
