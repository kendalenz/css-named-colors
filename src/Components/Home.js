import React, { useState, useEffect } from "react";
import * as d3 from "d3";

const Home = () => {
  const gistJsDelivrUrl =
    "https://gist.githubusercontent.com/kendalenz/32ca10c126219f8c706d3298d1c9cf1d/raw/6dd746ac16877b3c6b3c04d55536d0eba032a54f/cssNamedColors.csv";
  const [messages, setMessages] = useState([]); // Use an array to store each message line

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(gistJsDelivrUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const text = await response.text();
        const data = d3.csvParse(text);
        const messages = [
          `${Math.round(text.length / 1024)} kb`,
          `${data.length} rows`,
          `${data.columns.length} columns`,
        ];

        setMessages(messages); // Update state with the new messages array
      } catch (error) {
        console.error(error);
        setMessages(["Failed to load data"]);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div> // Render each message in a new line
      ))}
    </div>
  );
};

export default Home;