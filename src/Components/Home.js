import React, { useState, useEffect } from "react";
import * as d3 from "d3";

const Home = () => {
  const gistJsDelivrUrl =
    "https://gist.githubusercontent.com/kendalenz/32ca10c126219f8c706d3298d1c9cf1d/raw/6dd746ac16877b3c6b3c04d55536d0eba032a54f/cssNamedColors.csv";
  
  const [messages, setMessages] = useState([]); // Use an array to store each message line

  useEffect(() => {
    // Use d3.csv directly to fetch and parse the CSV data
    d3.csv(gistJsDelivrUrl).then(data => {
      // Once data is fetched and parsed, update the messages state
      const messages = [
        `${Math.round(data.length * 1024 / data.length)} kb`,
        `${data.length} rows`,
        `${data.columns.length} columns`,
      ];
      setMessages(messages);
    }).catch(error => {
      console.error(error);
      setMessages(["Failed to load data"]);
    });
  }, [gistJsDelivrUrl]); // Depend on gistJsDelivrUrl to re-fetch if the URL changes

  return (
    <div id='messages'>
      {messages.map((message, index) => (
        <div key={index}>{message}</div> // Render each message in a new line
      ))}
    </div>
  );
};

export default Home;
