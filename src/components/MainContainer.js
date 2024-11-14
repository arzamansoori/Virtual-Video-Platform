import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="pl-5 pt-4">
      <p>MainContainer</p>
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
