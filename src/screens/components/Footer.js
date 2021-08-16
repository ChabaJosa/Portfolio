import React from 'react';

const Footer = () => {
    return (
        <>
          <footer id="footer">
            <div className="inner">
              <ul className="icons">
                <li>
                  <a
                    href="https://twitter.com/cg_josa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon brands fa-twitter"
                  >
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ChabaJosa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon brands fa-github"
                  >
                    <span className="label">Github</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/chaba-josa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon brands fa-linkedin"
                  >
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </>
    );
};

export default Footer;