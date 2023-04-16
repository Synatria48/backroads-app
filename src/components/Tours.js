import React from "react";
import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, img, date, title, text, location, duration, cost } = tour;
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
