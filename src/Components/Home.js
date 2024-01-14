import React, { useEffect } from "react";

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
        const data = await response.text();
        return data;
        console.log(data); // This will log the fetched data to the console
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(gistJsDelivrUrl);
  }, []);

  return <div></div>;
};

export default Home;
