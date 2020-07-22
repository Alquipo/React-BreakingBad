import React, { useState } from "react";
import "./styles.css";

const Search = () => {
  const [text, setText] = useState("");

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
