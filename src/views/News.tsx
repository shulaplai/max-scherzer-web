import React from "react";
// import ReactMarkdown from "react-markdown";

// eslint-disable-next-line import/no-named-as-default-member
import GetNews from "../api/getNews";
import { Footer } from "./Footer";
import { Layout } from "./Layout";

function News() {
  return (
    <div>
      <Layout />
      <div className="max-w-screen-lg mx-auto px-3">
        <div className="antialiased text-gray-600">
          <h1>Stats</h1>
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
