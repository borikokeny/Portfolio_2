import React from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiFacebookLogoBold } from "react-icons/pi";
import { TiSocialGithubCircular } from "react-icons/ti";

export default function Contact() {
  return (
    <section id="contact" className="full-height d-flex align-items-center justify-content-center mt-5 mb-5">
      <div className="ms-5">
              <a href="https://www.linkedin.com/in/bori-kokeny-7070008a/" target="_blank">
              <TiSocialLinkedinCircular className="icons" />
              </a>
              <a href="mailto: bori@minerali.hu" target="_blank">
              <MdOutlineAlternateEmail className="icons p-1" />
              </a>
              <a href="https://www.facebook.com/bori.kokeny" target="_blank">
              <PiFacebookLogoBold className="icons p-1" />
              </a>
              <a href="https://github.com/borikokeny" target="_blank">
              <TiSocialGithubCircular className="icons" />
              </a>
              <p className="ms-3">bori@minerali.hu</p>
            </div>
    </section>
  );
}