/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Chain.jpg";

const imageAltText = "Chain Background";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Story of AWS",
    description:
      "Discover the Evolution and Impact of Amazon Web Services (AWS) in the Modern Tech Landscape.",
    url: "https://medium.com/@christobers/story-of-aws-20aefa9d6456",
  },
  {
    title: "Computer Networking",
    description:
      "Exploring the Transformative World of Computer Networking and Its Crucial Role in Our Connected Lives",
    url: "https://christober.hashnode.dev/computer-networking",
  },
  {
    title: "Software Development Life Cycle",
    description:
      "Unveiling the Comprehensive Software Development Life Cycle and Its Key Stages in Modern Software Engineering..",
    url: "https://christober.hashnode.dev/complete-software-development-process-agile-methodology",
  },
  {
    title: "Azure Virtual Machine Introduction",
    description:
      "Delving into the World of Virtual Machines in Azure and Their Role in Cloud Computing Solutions",
    url: "https://www.linkedin.com/pulse/comprehensive-guide-creating-virtual-machines-azure-christober-s?utm_source=share&utm_medium=member_android&utm_campaign=share_via",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
