import React from "react";
import { EventCard } from "./EventCard";

export const Events = () => {
  let cards = [0, 0, 0, 0, 0];
  return (
    <div>
      <h2 className="font-bold text-[25px] md:text-[35px] md:mt-10 mt-2 text-center">
        Upcoming Events
      </h2>

      <div className="flex items-center gap-x-7 overflow-x-scroll">
        {cards.map((el, index) => {
          return <EventCard key={index} />;
        })}
      </div>
    </div>
  );
};
