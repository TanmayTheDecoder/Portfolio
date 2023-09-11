import React from "react";
import "./experience.css";
import CommonBackground from "../../components/CommonBackground";
const Experience = () => {
  const cardFunction = () => {
    const linkBox = document.getElementsByClassName("link-box");
      return function (e) {
        linkBox.foreach((_,i) => {
          e.preventDefault(linkBox[i]);
        })
      } 
  };

  return (
    <>
      <div className="experience-container w-100 ">
        <CommonBackground />
        <div className="experience-inner w-100  flex-centered">
          <div className="experience-contents w-80">
            <div className="experience-title w-100 flex-column-start">
              Dive into my works...
            </div>
            <div className="cards-row">
              <div className="cards w-100 flex-column-start">
                <div className="card h-40 w-30">
                  <a
                    href="https://github.com/TanmayTheDecoder/Way-To-Code.git"
                    target="blank"
                  >
                    <div className="link-box adjust" onClick={cardFunction}>
                      <h3>Way To Code</h3>
                      <p>
                        This is a Group project in which I've contributed and
                        redesigned the whole website using HTML,CSS &
                        Javascript.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="cards-row">
              <div className="cards w-100 flex-column-end">
                <div className="card h-40 w-30">
                  <a
                    href="https://github.com/TanmayTheDecoder/Nicepage.git"
                    target="blank"
                  >
                    <div className="link-box adjust" onClick={cardFunction}>
                      <h3>Nice Page</h3>
                      <p>
                        This web page has some animations. It's designed using
                        HTML & CSS.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-container w-100">
        <CommonBackground />
        <div className="experience-inner w-100  flex-centered">
          <div className="experience-contents w-80">
            <div className="cards-row add-margin">
              <div className="cards w-100 flex-column-start">
                <div className="card h-40 w-30">
                  <a
                    href="https://github.com/TanmayTheDecoder/Homepage-Cool-.git"
                    target="blank"
                  >
                    <div className="link-box adjust" onClick={cardFunction}>
                      <h3>Cool Home Page</h3>
                      <p>
                        This is a simple Home Page based on cool theme designed
                        using HTML & CSS.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="cards-row add-margin">
              <div className="cards w-100 flex-column-end">
                <div className="card h-40 w-30">
                  <a
                    href="https://github.com/TanmayTheDecoder/tic_tac_toe.git"
                    target="blank"
                  >
                    <div className="link-box adjust" onClick={cardFunction}>
                      <h3>Tic Tac Toe Game</h3>
                      <p>I Made this game using Reactjs.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-container w-100">
        <CommonBackground />
        <div className="experience-inner w-100  flex-centered">
          <div className="experience-contents w-80">
            <div className="cards-row add-margin">
              <div className="cards w-100 flex-column-start">
                <div className="card h-40 w-30">
                  <a
                    href="https://github.com/TanmayTheDecoder/HTML-Template.git"
                    target="blank"
                  >
                    <div className="link-box adjust" onClick={cardFunction}>
                      <h3>Anita Dongre Website</h3>
                      <p>
                        This Template made using HTML & CSS and it's fully
                        responsive.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="cards-row add-margin">
              <div className="cards w-100 flex-column-end">
                <div className="card h-40 w-30">
                  <a
                    href="https://github.com/TanmayTheDecoder/eleconone.git"
                    target="blank"
                  >
                    <div className="link-box adjust" onClick={cardFunction}>
                      <h3>Eleconone</h3>
                      <p>This Website is made using Reactjs.(Responsive Work is going on.)</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-container w-100">
        <CommonBackground />
        <div className="experience-inner w-100  flex-centered">
          <div className="experience-contents w-80">
            <div className="cards-row add-margin">
              <div className="cards w-100 flex-column-start">
                <div className="card h-40 w-30">
                  <a
                    href="https://github.com/TanmayTheDecoder/react_template.git"
                    target="blank"
                  >
                    <div className="link-box adjust" onClick={cardFunction}>
                      <h3>Creators</h3>
                      <p>
                        This Template is made using Reactjs.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="cards-row add-margin">
              <div className="cards w-100 flex-column-end">
                <div className="card h-40 w-30">
                  <a
                    href="https://github.com/TanmayTheDecoder/api_handling.git"
                    target="blank"
                  >
                    <div className="link-box adjust" onClick={cardFunction}>
                      <h3>Eleconone</h3>
                      <p>Handled the data provided by API and made a website with it.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
