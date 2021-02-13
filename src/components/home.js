import React from "react";
import "./home.css";

export default function home() {
  return (
    <div className="container">
      <article>
        <h1>
          What Do You Want to Learn ?
          <br />
          <p>Choose a path ...</p>
        </h1>
      </article>
      <div className="buttons">
        <button className="btn" id="html">
          HTML 5
        </button>
        <button className="btn" id="css">
          CSS 3
        </button>
        <button className="btn" id="js">
          JavaScript
        </button>
      </div>
    </div>
  );
}
