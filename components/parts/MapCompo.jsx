import React, { useEffect, useState, useRef, useCallback } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function MapCompo({ movies }) {
  const [map, setMap] = useState(null);
  const [state, setState] = useState({
    defaultCenter: {
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

  // let map, infoWindow;

  const googlemap = useRef(null);
  useEffect((defaultCenter) => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
      version: "weekly",
      libraries: ["places"],
    });
    loader
      .load()
      .then((defaultCenter) => {
        const map = new google.maps.Map(googlemap.current, {
          center: defaultCenter,
          zoom: 8,
          mapTypeControl: false,
        });

        return map;
      })
      .then((mapObj) => {
        setMap(mapObj);

        // ====search box==========================================
        // Create the search box and link it to the UI element.
        const input = document.getElementById("pac-input");
        const searchBox = new google.maps.places.SearchBox(input);

        mapObj?.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        console.log("map", map);
        // Bias the SearchBox results towards current map's viewport.
        mapObj?.addListener("bounds_changed", () => {
          searchBox.setBounds(mapObj.getBounds());
        });

        let markers = [];

        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener("places_changed", () => {
          const places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach((marker) => {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          const bounds = new google.maps.LatLngBounds();

          places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
              console.log("Returned place contains no geometry");
              return;
            }

            const icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25),
            };

            // Create a marker for each place.
            markers.push(
              new google.maps.Marker({
                mapObj,
                icon,
                title: place.name,
                position: place.geometry.location,
              })
            );
            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          mapObj.fitBounds(bounds);
        });
      });
  }, []);

  const getLatLngEvent = () => {
    // // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
      content: "Click the map to get Lat/Lng!",
      position: myLatlng,
    });
    // infoWindow.open(map);
    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
      // // Close the current InfoWindow.
      // infoWindow.close();
      // Create a new InfoWindow.
      infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });
      infoWindow.setContent(
        JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
      );
      // infoWindow.open(map);
    });
  };

  const handleDrawMarkers = useCallback(() => {
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
    map?.fitBounds(bounds);
    map?.panToBounds(bounds);
  }, [map, state]);

  useEffect(() => {
    let timer = setTimeout(() => {
      handleDrawMarkers();
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [handleDrawMarkers]);

  return (
    <>
      <div className="styledMap relative ?">
        {/* <div style={{ backgroundColor: 'white', padding: '50px', zIndex: '9999', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)'}}>
        <h1>Movies</h1>
        {movies.map((movie) => (
          <li key={movie.title}>
            <h2>Title: {movie.title}</h2>
            <h3>Critic: {movie.metacritic}</h3>
            <p>Plot: {movie.plot}</p>
          </li>
        ))}
      </div> */}

        <div id="google-map" ref={googlemap} className="w-screen h-screen " />
        {/* <div className="z-20 absolute top-3 left-5 w-full ?"> */}
        <div className="w-full">
          <form>
            <input
              id="pac-input"
              className="bg-white mt-4 ml-4 w-2/3 h-auto text-lg p-2 "
            ></input>
          </form>
          {/* <form>
            <input
              id="pac-input"
              className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search"
            />
          </form> */}
        </div>
      </div>
    </>
  );
}

export default MapCompo;
