import React from "react";

import { YoutubeEmbed } from "../feature/Youtube.jsx";

function Pitch() {
  return (
    <div>
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="BsINY1-d4Kg&t=2s&ab_channel=BaseballDoesn%27tExist" />
    </div>
  );
}

export { Pitch };
