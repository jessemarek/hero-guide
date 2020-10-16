import React from "react";
import HeroMenuCard from "./HeroMenuCard";
import { formatText } from "../../utils";

const NewAwakenings = (props) => {
  const { title, guides, message } = props.data;

  const guideURL = "/awakenings";

  return (
    <section className={title}>
      {/* Section title */}
      <h4>{formatText(title)}</h4>
      {/* List of image card links to guides */}
      <ul>
        {guides.map((guide, idx) => (
          <HeroMenuCard key={idx} guide={guide} guideURL={guideURL} />
        ))}
      </ul>
      {/* Section message displayed at bottom of section. Not rendered if message is null */}
      {message && (
        <div className="message-box">
          <p>{message}</p>
        </div>
      )}
    </section>
  );
};

export default NewAwakenings;
