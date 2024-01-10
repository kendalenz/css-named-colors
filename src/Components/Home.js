// import React, { useEffect } from "react";

// const Home = () => {
//   useEffect(() => {
//     const gistRawUrl = "https://gist.github.com/kendalenz/32ca10c126219f8c706d3298d1c9cf1d#file-cssnamedcolors-csv";

//     fetch(gistRawUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.text();
//       })
//       .then((data) => {
//         console.log(data); // This will log the fetched data to the console
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return <div></div>;
// };

// export default Home;


import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const gistJsDelivrUrl = "https://gist.githubusercontent.com/kendalenz/32ca10c126219f8c706d3298d1c9cf1d/raw/6dd746ac16877b3c6b3c04d55536d0eba032a54f/cssNamedColors.csv";

    fetch(gistJsDelivrUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        console.log(data); // This will log the fetched data to the console
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div></div>;
};

export default Home;
