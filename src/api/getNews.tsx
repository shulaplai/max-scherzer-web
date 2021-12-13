/* eslint-disable no-console */
const axios = require("axios").default;

// const options = {
//   method: "GET",
//   url: "https://mlb-data.p.rapidapi.com//json/named.player_info.bam?sport_code='mlb'&player_id={player_id}",
//   params: { sport_code: "'mlb'", player_id: "'453286'" },
//   headers: {
//     "x-rapidapi-host": "mlb-data.p.rapidapi.com",
//     "x-rapidapi-key": "322c6e1594msh3f362855634cfcdp11edd6jsn13f052660758",
//   },
// };

const GetNews = () => {
  const playerInfo = axios
    .get("https://www.reddit.com/r/baseball/hot.json")
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error: any) {
      console.log(error);
    });
  return (
    <div>
      {" "}
      aaaa<p>{playerInfo}</p>
    </div>
  );
};

export default GetNews;
