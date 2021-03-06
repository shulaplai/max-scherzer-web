import React from "react";

import YouTube from "react-youtube";

import { Footer } from "./Footer";
import { Layout } from "./Layout";

// import { Banner } from './Banner';

function Pitch() {
  return (
    <div>
      <Layout />
      <div className="max-w-screen-lg mx-auto px-3">
        <div className="antialiased text-gray-600">
          <h1>Youtube Video</h1>
          <YouTube videoId="BsINY1-d4Kg" />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export { Pitch };
