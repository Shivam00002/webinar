import React, { useEffect, useState } from "react";
import { EventCard } from "./EventCard";

export const Events = () => {
  let cards = [0, 0, 0, 0, 0];
  const [webinars, setWebinars] = useState([]);



  const Api = "https://webinar-backend.vercel.app/data";

  const fetchWebinars = async () => {
    try {
      const response = await fetch(Api);
      if (response.ok) {
        const data = await response.json();
        setWebinars(data.Webinars);
      } else {
        console.error(
          "Failed to fetch webinars:",
          response.status,
          response.statusText
        );

      }
    } catch (error) {
      console.error("Error fetching webinars:", error.message);
    }
  };

  useEffect(() => {
    fetchWebinars();
  }, [webinars]);

  console.log(webinars);

  return (
    <div>
      <h2 className="font-bold text-[25px] md:text-[35px] md:mt-10 mt-2 text-center">
        Upcoming Events
      </h2>

      <div className="flex items-center md:h-[600px] gap-x-7 overflow-x-scroll">
        {webinars?.map((el, index) => {
          return (
            <EventCard
              key={index}
              title={el.title}
              teacher={el.teacher_name}
              time={el.time}
              date={el.date}
              price={el.price}
              imgurl={el.teacher_img}
              id={el._id}
              description={el.description}
            />
          );
        })}
      </div>
    </div>
  );
};
