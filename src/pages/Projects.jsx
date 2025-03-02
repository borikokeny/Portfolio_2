import React from "react";
import Bidify from "../components/Bidify";
import Holidaze from "../components/Holidaze";
import Jims from "../components/Jims";

export default function Projects() {
  return (
    <section id="projects" className="projects-container">
    <Bidify />
    <Holidaze />
    <Jims />
  </section>
  );
}