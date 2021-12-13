/* eslint-disable react/no-unescaped-entities */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import React from "react";
// import ReactMarkdown from "react-markdown";

// eslint-disable-next-line import/no-named-as-default-member
// import GetNews from "../api/getNews";
import { Footer } from "./Footer";
import { Layout } from "./Layout";

function News() {
  return (
    <div>
      <Layout />
      <div className="max-w-screen-lg mx-auto px-3">
        <div className="antialiased text-gray-600">
          <h1>Stats</h1>
          <a>
            Roberts told the announcers that “you can’t talk to let alone touch”
            Scherzer during a start. Roberts shared that he patted Scherzer on
            the behind after each inning of the pitcher’s first start with the
            team. By the fourth inning, Scherzer had grown tired of it and
            grumbled something under his breath. “Did he just say, ‘don’t effing
            touch me?” Roberts said. Sure enough, that’s exactly what Scherzer
            said. Roberts said he got the scoop from his players, who informed
            the manager that Scherzer does not want to be touched during starts.
            Later, after Scherzer completed his outing, Roberts asked him about
            the “don’t f—ing touch me” line. Scherzer said indeed that was his
            message to the manager and explained why. “This is my job,” Scherzer
            told Roberts. “I don’t need any kind of congratulations or support.
            This is my job.” So there you have it. Scherzer does not need the
            positive reinforcement during his starts, and he does not like to be
            touched. His methods definitely work. A 185-97 record with a career
            3.18 ERA, three Cy Youngs and eight All-Star appearances say that
            Scherzer knows what he’s doing. Roberts just got clued in.
          </a>

          <a>
            Earlier this week, Washington Nationals ace Max Scherzer broke his
            nose while (somewhat lazily) practicing his bunting, the latest
            victory for the"universal DH" crowd. A less insane pitcher/human
            probably would have at least skipped his next start, or even missed
            more time in the increasingly careful new-world MLB, where players
            miss a game if they have the sniffles. Mad Max? He was on the mound
            two days later against the Philles, throwing seven scoreless
            innings, striking out 10 batters, giving up just four hits and
            notching his sixth victory of the season. He did get the nose
            checked out, but only to satisfy team doctors. RELATED: Vanderbilt
            pitcher Kumar Rocker just became your new favorite player “Trust me,
            this thing looks a lot worse than it actually is,” Scherzer said
            after the game. “I felt zero pain. There’s been plenty of other
            injuries where I felt a lot of pain and I’ve had to pitch through.
            I’ll hang my hat on those starts, but tonight I felt zero pain. This
            is part of what you have to do. You take the ball every fifth time.
            “That’s my responsibility to the team, to make sure I always post,
            and I knew I could post tonight.” Funny thing is, it looked
            incredibly painful:
          </a>
          <a>
            https://www.youtube.com/watch?v=mxs6froLhrM&ab_channel=BrodSquadSports
          </a>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export { News };
