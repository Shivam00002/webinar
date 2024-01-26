import React from "react";
import { HeroComponent } from "./HeroComponent";
import { Featured } from "./Featured";
import { VideoPlayer } from "./VideoPlayer";
import { Events } from "./Events";
import { WillLearn } from "./WillLearn";
import NextStep from "./NextStep";
import SeatForm from "./SeatForm";
import { Frequently } from "./Frequently";
import Footer from "./Footer";

export const Home = () => {
  return (
    <div className="md:max-w-[1240px] w-full mx-auto">
      <HeroComponent />
      <Featured />
      <VideoPlayer />
      <Events />
      <WillLearn />
      <NextStep />
      <SeatForm />
      <Frequently />
      <Footer />
    </div>
  );
};
