import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating
//         color="blue"
//         maxRating={10}
//         onSetRating={setMovieRating}
//         // abbiamo creato un nuovo state per renderlo utilizzabile anche esternamento al component
//       />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      size={24}
      color="red"
      className="test"
      defaultRating={0}
      // abbiamo dichiarato dei valori "predefiniti in modo da rendere l'app più riutilizzabile come se fosse una api"
    />
    <Test /> */}
  </React.StrictMode>
);
