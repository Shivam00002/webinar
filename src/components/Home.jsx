import React from "react";
import { HeroComponent } from "./HeroComponent";
import { Featured } from "./Featured";
import { VideoPlayer } from "./VideoPlayer";
import { Events } from "./Events";
import { WillLearn } from "./WillLearn";
import NextStep from "./NextStep";
import SeatForm from "./SeatForm";
import { Frequently } from "./Frequently";

export const Home = () => {
  return (
    <>
      <HeroComponent />
      <Featured />
      <VideoPlayer />
      <Events />
      <WillLearn />
      <NextStep />
      <SeatForm />
      <Frequently />
    </>
  );
};
