import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import axios from "./axios";
import "./TinderCards.css";


const initPersons = [
  {
    name: 'Mark zuckerberg',
    imgUrl: 'https://cdn.i-scmp.com/sites/default/files/styles/1920x1080/public/d8/images/methode/2020/02/03/7ffc02a0-432a-11ea-9fd9-ecfbb38a9743_image_hires_115830.jpeg?itok=E3rd9X6j&v=1580702317',
  },
  {
    name: 'Messi',
    imgUrl: 'http://c.files.bbci.co.uk/17EAC/production/_114246979_messi.jpg',
  },
]

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // const req = await axios.get("/tinder/cards");

      setPeople(initPersons);
    }
    fetchData();
  }, []);


  console.log(people);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
