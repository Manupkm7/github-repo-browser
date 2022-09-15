import React from "react";

const Footer = () => {
  return (
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Frontend Challenge: Github API</h5>
            <p class="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="https://github.com/Manupkm7">
                  Profile Github
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/manuel-espinoza-pkm/">
                  Linkedin
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="https://portfolio-manupkm7.vercel.app/">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright center">
        <div class="container">© 2022 Manuel Espinoza</div>
      </div>
    </footer>
  );
};

export default Footer;
