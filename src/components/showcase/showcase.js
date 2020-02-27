import React from "react";
import Link from "../link/link";
export default function Showcase(props) {
  const { img, title, description, links } = props;
  return (
    <section className="showcase">
      <div className="image-col">
        {img ? (
          <img
            src={require(`../../assets/images/${img}.png`)}
            width="100%"
            alt="project"
          ></img>
        ) : (
          <p className="no-image">no image</p>
        )}
      </div>

      <div className="description-col">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <div className="link-wrapper">
          {links.map(link => (
            <Link url={link.url} type={link.type} />
          ))}
        </div>
      </div>
    </section>
  );
}
