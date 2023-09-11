import React from "react";
import "./contact.css";
import CommonBackground from "../../components/CommonBackground";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import * as Unicons from "@iconscout/react-unicons";
const Contact = () => {
  const linkFunction = () => {
    const link = document.getElementsByClassName('contact-link');
    return function handleClick(e) {
      link.forEach((_, i) => {
        e.preventDefault(link[i]);
      });
    }
  }

  return (
    <div className="contact-container h-100 w-100">
      <CommonBackground />
      <div className="contact-inner w-100 h-100p flex-centered">
        <div className="contact-contents w-80">
          <div className="contact-contents-inner w-100">
            <div className="contact-title w-100 flex-column-start">
              Connect with me...
            </div>
            <div className="contact-description flex-column-start">
              <ul className="flex-column-start">
                <li onClick={linkFunction} className="contact-link">
                  <a
                    href="https://www.linkedin.com/in/tanmay-dobariya-8450a3253"
                    className="flex-centered" target="blank"
                  >
                    <FaLinkedinIn
                      size="1.5rem"
                      color="var(--fluorescent-yellow)"
                      style={{ padding: "2rem" }}
                    />
                    Tanmay Dobariya
                  </a>
                </li>
                <li onClick={linkFunction} className="contact-link">
                  <a
                    href="https://mail.google.com/mail/u/2/#inbox"
                    className="flex-centered" target="blank"
                  >
                    <BiLogoGmail
                      size="1.5rem"
                      color="var(--fluorescent-yellow)"
                      style={{ padding: "2rem" }}
                    />
                    dobariyatanmay@gmail.com
                  </a>
                </li>
                <li onClick={linkFunction} className="contact-link">
                  <a href="tel:9726699329" className="flex-centered">
                    <Unicons.UilPhoneAlt
                      size="1.5rem"
                      color="var(--fluorescent-yellow)"
                      style={{ padding: "2rem" }}
                    />
                    9726699329
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
