import React, { useState } from "react";
import "./App.css";

const data = [
  {
    name: "Pratham Asrani",
    Age: 21,
    img: "https://images.pexels.com/photos/19867111/pexels-photo-19867111/free-photo-of-portrait-of-a-brown-cat.jpeg",
  },
  {
    name: "Niharika Kumar",
    Age: 20,
    img: "https://images.pexels.com/photos/19867111/pexels-photo-19867111/free-photo-of-portrait-of-a-brown-cat.jpeg",
  },
  {
    name: "Vedant Tiwari",
    Age: 21,
    img: "https://images.pexels.com/photos/19867111/pexels-photo-19867111/free-photo-of-portrait-of-a-brown-cat.jpeg",
  },
  {
    name: "Silvi Gupta",
    Age: 19,
    img: "https://images.pexels.com/photos/19867111/pexels-photo-19867111/free-photo-of-portrait-of-a-brown-cat.jpeg",
  },
  {
    name: "Shreyansh Telrande",
    Age: 22,
    img: "https://images.pexels.com/photos/19867111/pexels-photo-19867111/free-photo-of-portrait-of-a-brown-cat.jpeg",
  },
  {
    name: "Komal Nichat",
    Age: 20,
    img: "https://images.pexels.com/photos/19867111/pexels-photo-19867111/free-photo-of-portrait-of-a-brown-cat.jpeg",
  },
  {
    name: "Rishika Singh",
    Age: 22,
    img: "https://images.pexels.com/photos/19867111/pexels-photo-19867111/free-photo-of-portrait-of-a-brown-cat.jpeg",
  },
]

function App() {
  const [Details, setDetails] = useState(data);

  return (
      <div className="container">
        {
          Details.map((arr, index) => {
            return (
              <div className="card" key={index}>
                <p>Name = {arr.name}</p>
                <p>Age = {arr.Age}</p>
                <img src={arr.img} alt={arr.name} style = {{width: '12vw', height: '15vw'}}/>
                <br />
                <br />
              </div>
            )
          })
        }
      </div>
  );
}

export default App;
