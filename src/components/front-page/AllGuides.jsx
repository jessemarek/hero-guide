import React from "react";
import GuideMenuCard from "./GuideMenuCard";
import { formatText } from "../../utils";

const AllGuides = (props) => {
  const { title, guides } = props.data;

  const guideURL = "/guides";

  return (
    <section className="menu-box">
      {/* Section title */}
      <h4>{formatText(title)}</h4>
      {/* List of image card links to guides */}
      <ul>
        {guides.map((guide, idx) => (
          <GuideMenuCard key={idx} guide={guide} guideURL={guideURL} />
        ))}
      </ul>
    </section>
  );
};

export default AllGuides;
