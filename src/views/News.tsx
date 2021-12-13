import React from "react";

import YouTube from "react-youtube";

import GetNews from "../api/getNews";
import { Footer } from "./Footer";
import { Layout } from "./Layout";

function News() {
  return (
    <div>
      <Layout />
      <div className="max-w-screen-lg mx-auto px-3">
        <div className="antialiased text-gray-600">
          <h1>Youtube Video</h1>
          <YouTube videoId="BsINY1-d4Kg" />
        </div>
      </div>
      <GetNews />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export { News };
