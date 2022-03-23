import React, { useEffect, useState, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

import { connectToDatabase } from "../../util/mongodb";

function MapCompo({ movies }) {
  const [state, setState] = useState({
    defaultCenter: {
      // lat: -34.397,
      // lng: 150.644,
      lat: 36.1774465,
      lng: -86.7042552,
    },
    markers: [
      {
        lat: 36.157055,
        lng: -86.7696144,
      },
      {
        lat: 36.1521981,
        lng: -86.7801724,
      },
      {
        lat: 36.1577547,
        lng: -86.7785841,
      },
      {
        lat: 36.1400674,
        lng: -86.8382887,
      },
      {
        lat: 36.1059131,
        lng: -86.7906082,
      },
    ],
  });

  let map, infoWindow;

  const googlemap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
      // version: "weekly",
    });
    loader.load().then(() => {
      map = new google.maps.Map(googlemap.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        mapTypeControl: false,
      });
    });
  });

  // function initMap() {
  // const { defaultCenter } = state;
  // map = new google.maps.Map(document.getElementById("google-map"), {
  //   center: defaultCenter,
  //   zoom: 8,
  //   mapTypeControl: false,
  //   // mapTypeControlOptions: {
  //   //   style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
  //   // },
  // });
  // }

  const handleDrawMarkers = () => {
    const { markers } = state;
    const bounds = new google.maps.LatLngBounds();
    console.log(bounds);
    map &&
      markers.forEach((marker) => {
        new google.maps.Marker({
          position: marker,
          map: map,
        });

        bounds.extend(marker);
      });
    map.fitBounds(bounds);
    map.panToBounds(bounds);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      handleDrawMarkers();
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="styledMap relative ?">
        {/* {movies.map((movie) => (
          <li key={movie.title}>
            <h2>{movie.title}</h2>
            <h3>{movie.metacritic}</h3>
            <p>{movie.plot}</p>
          </li>
        ))} */}
        <div id="google-map" ref={googlemap} className="w-screen h-screen " />
        <div className="z-20 absolute top-3 left-5 w-full">
          <form>
            <input
              id="pac-input"
              className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
    </>
  );
}

// function loadScript(url) {
//   var index = window.document.getElementsByTagName("script")[0];
//   var script = window.document.createElement("script");
//   script.src = url;
//   script.async = true;
//   script.defer = true;
//   index.parentNode.insertBefore(script, index);
// }

export default MapCompo;

// export async function getServerSideProps() {
//   console.log("getServerSideProps()");
//   const { db } = await connectToDatabase();
//   const movies = await db
//     .collection("movies")
//     .find({})
//     .sort({ metacritic: -1 })
//     .limit(20)
//     .toArray();
//   return {
//     props: {
//       movies: JSON.parse(JSON.stringify(movies)),
//     },
//   };
// }
