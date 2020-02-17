import React from "react";
export default function Showcase() {
  return (
    <section className="showcase">
      <div className="description-col">
        <h3>Title of description</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          tenetur autem aspernatur illum voluptate at nobis minus mollitia
          reprehenderit. Rerum dolorem saepe deserunt, minima amet{" "}
        </p>
        <div className="link-wrapper">
          <a href="#/link" title="link to website" className="link web">
            visit the website
          </a>
          <a href="#/git" title="link to git repository" className="link git">
            go to git repos
          </a>
        </div>
      </div>
      <div className="image-col"></div>
    </section>
  );
}
