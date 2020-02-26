import React from "react";
import Link from "../link/link";

export default function Showcase() {
  return (
    <section className="showcase">
      <div className="image-col"></div>
      <div className="description-col">
        <h3 className="title">Title of description</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          tenetur autem aspernatur illum voluptate at nobis minus mollitia
          reprehenderit. Rerum dolorem saepe deserunt, minima amet{" "}
        </p>
        <div className="link-wrapper">
          <Link type="github" />
          <Link type="codepen" />
          <Link type="figma" />
        </div>
      </div>
    </section>
  );
}
