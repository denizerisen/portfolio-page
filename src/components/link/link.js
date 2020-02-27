import React from "react";
import sprite from "../../assets/sprite.svg";

export default function Link({ url, type }) {
  const linksObject = {
    github: {
      title: "link to github",
      class: "github",
      icon: "github"
    },
    website: {
      title: "link to the website",
      class: "website",
      icon: "link"
    },
    codepen: {
      title: "link to codepen",
      class: "codepen",
      icon: "codepen"
    },
    twitter: {
      title: "link to twitter",
      class: "twitter",
      icon: "twitter"
    },
    linkedin: {
      title: "link to linkedin",
      class: "linkedin",
      icon: "linkedin"
    },
    mail: {
      title: "mail address",
      class: "mail",
      icon: "at-sign"
    },
    figma: {
      title: "link to figma file",
      class: "figma",
      icon: "figma"
    }
  };

  const link = linksObject[type];

  return (
    <a
      href={url}
      title={link.title}
      className={"link " + link.class}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg className="icon">
        <use href={sprite + `#${link.icon}`} />
      </svg>
    </a>
  );
}
