import React from "react";
import "./Footer.css";
import {FaGithubSquare} from "react-icons/lib/fa";


const footer = () => (
    <footer className="footer">
      <p>Copyright &copy; 2019 Code Battle
        <a
            href="https://github.com/hachir/Code-Battle."
            target="_blank" rel="noopener noreferrer">
          <FaGithubSquare size={20} className="github-icon"/>
        </a>
      </p>
      <p>Created by:
        <a href="https://github.com/hachir/Code-Battle." target="_blank"
           rel="noopener noreferrer">HA</a>
      </p>
    </footer>
);

export default footer;