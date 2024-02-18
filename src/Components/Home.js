import React, { useEffect } from "react";
import * as d3 from "d3";

const Home = () => {
  const gistJsDelivrUrl =
  "https://gist.githubusercontent.com/kendalenz/32ca10c126219f8c706d3298d1c9cf1d/raw/6dd746ac16877b3c6b3c04d55536d0eba032a54f/cssNamedColors.csv";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(gistJsDelivrUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const text = await response.text();
        const data = d3.csvParse(text)
        console.log(Math.round(text.length / 1024) + 'kb')
        console.log(data.length + 'rows')
        console.log(data.columns.length + 'columns')

        // console.log(data); // This will log the fetched data to the console

        return data;
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(gistJsDelivrUrl);
  }, []);

  return <div></div>;
};

export default Home;
