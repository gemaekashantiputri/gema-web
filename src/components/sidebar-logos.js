import React from 'react';
import '../styles/sidebar.css';
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Sidebar = () => {

  return (
    <>
      <div className="sidebar-logos" href="/">
        <a href="mailto:gemaeka1@gmail.com">
          <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
        </a>
        <a href="https://github.com/gemaekashantiputri">
          <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
        </a>
        <a href="https://www.linkedin.com/in/gemaekashantiputri/">
          <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
        </a>
      </div>
    </>
  );
}

export default Sidebar