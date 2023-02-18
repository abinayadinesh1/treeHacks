import * as React from "react";
import { useState, useEffect } from "react";
import SideMenu from "./SideMenu";
import MapView from "./MapView";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactStreetview from "react-streetview";

function App() {
  const googleMapsApiKey = "AIzaSyD8c2Nbt1qhxlMCJR5lgQ0Gcos3nW7uQF0";

  //necessary for walkscore api
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  const paintedLadies = "Hayes St, San Francisco, CA 94117"
  
  // effect to grab information from walkscore api
  useEffect(() => {
    fetch(
      "https://stmhall.ca/walkscore.php?addr=Houston Texas Public Library"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  console.log(items)
  console.log(items.walkscore)

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <p>hello</p>
        <SideMenu />
      </div>      
      // <ul>
      //   {items.map((item) => (
      //     <li>
      //       {item.name} {item.price}
      //     </li>
      //   ))}
      // </ul>
    );
  }
}

export default App;

// OLD
// previously useful for google maps api
// const streetViewPanoramaOptions = {
//           position: {lat: 46.9171876, lng: 17.8951832},
//           pov: {heading: 100, pitch: 0},
//           zoom: 1
//       };

//             <ReactStreetview
//                   apiKey={googleMapsApiKey}
//                   streetViewPanoramaOptions={streetViewPanoramaOptions}
//               />
//   <div>
//   {/* <MapView />
//   <SideMenu /> */}
// </div>
